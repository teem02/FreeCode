const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'FreeCode AI Coding Platform is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// AI Code Generation endpoint (mock implementation)
app.post('/api/generate-code', (req, res) => {
  const { prompt, language = 'javascript' } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ 
      error: 'Prompt is required',
      message: 'Please provide a description of what you want to code'
    });
  }

  // Mock AI response - in a real implementation, this would connect to an AI service
  const mockResponses = {
    javascript: {
      'sort array': `function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Usage example:
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = sortArray(numbers);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]`,
      
      'fibonacci': `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// More efficient version with memoization:
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Usage:
console.log(fibonacci(10)); // 55`,
      
      'default': `// AI-generated ${language} code for: ${prompt}
function generatedFunction() {
    // This is a placeholder implementation
    // In a real AI system, this would be generated based on your prompt
    console.log("Generated code for: ${prompt}");
    
    // TODO: Implement the actual functionality
    return "Code generated successfully!";
}

// Usage example:
generatedFunction();`
    },
    
    python: {
      'sort array': `def sort_array(arr):
    """Sort an array of numbers in ascending order."""
    return sorted(arr)

# Usage example:
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = sort_array(numbers)
print(sorted_numbers)  # [11, 12, 22, 25, 34, 64, 90]`,
      
      'fibonacci': `def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# More efficient version with memoization:
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

# Usage:
print(fibonacci(10))  # 55`,
      
      'default': `# AI-generated Python code for: ${prompt}
def generated_function():
    """
    This is a placeholder implementation.
    In a real AI system, this would be generated based on your prompt.
    """
    print(f"Generated code for: ${prompt}")
    
    # TODO: Implement the actual functionality
    return "Code generated successfully!"

# Usage example:
result = generated_function()
print(result)`
    }
  };

  // Find matching response or use default
  const languageResponses = mockResponses[language] || mockResponses.javascript;
  let code = languageResponses.default;
  
  // Check for specific patterns in the prompt
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes('sort') && lowerPrompt.includes('array')) {
    code = languageResponses['sort array'] || code;
  } else if (lowerPrompt.includes('fibonacci')) {
    code = languageResponses['fibonacci'] || code;
  }

  res.json({
    success: true,
    prompt,
    language,
    code,
    explanation: `This ${language} code implements the functionality you requested: "${prompt}". The code includes examples and follows best practices for ${language} development.`,
    timestamp: new Date().toISOString()
  });
});

// Code explanation endpoint
app.post('/api/explain-code', (req, res) => {
  const { code, language = 'javascript' } = req.body;
  
  if (!code) {
    return res.status(400).json({ 
      error: 'Code is required',
      message: 'Please provide code to explain'
    });
  }

  // Mock explanation - in a real implementation, this would use AI to analyze the code
  const explanation = `This ${language} code appears to contain the following elements:

1. **Function Definition**: The code defines one or more functions
2. **Logic Flow**: Contains conditional statements, loops, or other control structures
3. **Variables**: Uses variables to store and manipulate data
4. **Best Practices**: Follows ${language} coding conventions

**Detailed Analysis:**
- The code is written in ${language}
- It demonstrates good programming practices
- Error handling could potentially be improved
- The logic appears to be well-structured

**Suggestions for Improvement:**
- Add more detailed comments
- Consider edge cases
- Implement proper error handling
- Add unit tests for validation`;

  res.json({
    success: true,
    code,
    language,
    explanation,
    suggestions: [
      'Add input validation',
      'Include error handling',
      'Write unit tests',
      'Add documentation comments'
    ],
    timestamp: new Date().toISOString()
  });
});

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 FreeCode server is running on http://localhost:${PORT}`);
  console.log(`📖 API Documentation: http://localhost:${PORT}/api/health`);
  console.log(`🎯 Ready to help you code with AI!`);
});

module.exports = app;