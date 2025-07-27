// FreeCode - Client-side JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    setupEventListeners();
    displayWelcomeMessage();
});

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Generate button click
    const generateBtn = document.getElementById('generate-btn');
    const promptInput = document.getElementById('prompt-input');
    const tryNowBtn = document.getElementById('try-now-btn');
    const copyBtn = document.getElementById('copy-code-btn');
    
    // Try Now button
    if (tryNowBtn) {
        tryNowBtn.addEventListener('click', scrollToDemo);
    }
    
    // Generate button
    if (generateBtn) {
        generateBtn.addEventListener('click', generateCode);
    }
    
    // Copy button
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCode);
    }
    
    // Allow Enter key to trigger generation
    if (promptInput) {
        promptInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                generateCode();
            }
        });
    }
    
    // Language select change
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', updateOutputLanguage);
    }
}

// Display welcome message
function displayWelcomeMessage() {
    console.log('🚀 Welcome to FreeCode!');
    console.log('🤖 Ready to generate AI-powered code!');
    console.log('💡 Try asking for: "Create a function to sort an array" or "Generate a fibonacci calculator"');
}

// Scroll to demo section
function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Update output language display
function updateOutputLanguage() {
    const languageSelect = document.getElementById('language-select');
    const outputLanguage = document.getElementById('output-language');
    const generatedCode = document.getElementById('generated-code').querySelector('code');
    
    const languageMap = {
        'javascript': 'JavaScript',
        'python': 'Python',
        'java': 'Java',
        'cpp': 'C++'
    };
    
    const selectedLanguage = languageSelect.value;
    outputLanguage.textContent = languageMap[selectedLanguage] || 'Code';
    
    // Update syntax highlighting class
    generatedCode.className = `language-${selectedLanguage}`;
}

// Main code generation function
async function generateCode() {
    const promptInput = document.getElementById('prompt-input');
    const languageSelect = document.getElementById('language-select');
    const generateBtn = document.getElementById('generate-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    const generatedCode = document.getElementById('generated-code');
    const codeExplanation = document.getElementById('code-explanation');
    
    const prompt = promptInput.value.trim();
    const language = languageSelect.value;
    
    // Validation
    if (!prompt) {
        showNotification('Please enter a description of what you want to code!', 'warning');
        promptInput.focus();
        return;
    }
    
    // Show loading state
    generateBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    try {
        // Call the API
        const response = await fetch('/api/generate-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                language: language
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
            // Display generated code
            const codeElement = generatedCode.querySelector('code');
            codeElement.textContent = data.code;
            codeElement.className = `language-${language}`;
            
            // Display explanation
            codeExplanation.innerHTML = `
                <h4>Code Explanation</h4>
                <p>${data.explanation}</p>
                <h4>Generated for:</h4>
                <p><strong>"${data.prompt}"</strong></p>
                <h4>Language:</h4>
                <p><strong>${data.language.charAt(0).toUpperCase() + data.language.slice(1)}</strong></p>
            `;
            
            // Re-highlight syntax
            if (window.Prism) {
                Prism.highlightElement(codeElement);
            }
            
            // Switch to code tab
            document.querySelector('.tab-btn[data-tab="code"]').click();
            
            showNotification('Code generated successfully!', 'success');
        } else {
            throw new Error(data.message || 'Failed to generate code');
        }
        
    } catch (error) {
        console.error('Error generating code:', error);
        showNotification('Failed to generate code. Please try again.', 'error');
        
        // Show error in code area
        const codeElement = generatedCode.querySelector('code');
        codeElement.textContent = `// Error generating code
// ${error.message}
// Please try again with a different prompt`;
        codeElement.className = 'language-javascript';
        
        if (window.Prism) {
            Prism.highlightElement(codeElement);
        }
    } finally {
        // Reset button state
        generateBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

// Copy code to clipboard
async function copyCode() {
    const codeElement = document.getElementById('generated-code').querySelector('code');
    const code = codeElement.textContent;
    
    try {
        await navigator.clipboard.writeText(code);
        showNotification('Code copied to clipboard!', 'success');
    } catch (error) {
        console.error('Failed to copy code:', error);
        
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showNotification('Code copied to clipboard!', 'success');
        } catch (fallbackError) {
            showNotification('Failed to copy code', 'error');
        }
        
        document.body.removeChild(textArea);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:white;font-size:1.2rem;cursor:pointer;margin-left:10px;">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Set color based on type
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Example prompts for quick testing
const examplePrompts = [
    "Create a function that sorts an array of numbers",
    "Generate a fibonacci calculator",
    "Write a function to reverse a string",
    "Create a simple calculator function",
    "Generate a function to find the largest number in an array",
    "Write a function to check if a string is a palindrome",
    "Create a function to count vowels in a string",
    "Generate a basic password generator",
    "Write a function to convert temperature units",
    "Create a simple todo list manager"
];

// Add example prompt functionality
function addExamplePrompts() {
    const promptInput = document.getElementById('prompt-input');
    let currentExampleIndex = 0;
    
    // Add placeholder rotation
    setInterval(() => {
        if (promptInput.value === '') {
            promptInput.placeholder = `Example: ${examplePrompts[currentExampleIndex]}`;
            currentExampleIndex = (currentExampleIndex + 1) % examplePrompts.length;
        }
    }, 3000);
}

// Initialize example prompts
setTimeout(addExamplePrompts, 1000);

// Health check on page load
fetch('/api/health')
    .then(response => response.json())
    .then(data => {
        console.log('✅ FreeCode API Status:', data.status);
        console.log('📊 Version:', data.version);
    })
    .catch(error => {
        console.warn('⚠️ API health check failed:', error);
    });