#!/usr/bin/env python3
"""
FreeCode - AI-Powered Coding Assistant
A simple command-line interface for AI-assisted coding.
"""

import os
import sys
import json
from typing import Optional

class FreeCodeAssistant:
    """Simple AI coding assistant."""
    
    def __init__(self):
        self.session_history = []
    
    def display_welcome(self):
        """Display welcome message and instructions."""
        print("=" * 60)
        print("🤖 Welcome to FreeCode - AI Coding Assistant")
        print("=" * 60)
        print("Commands:")
        print("  'generate <description>' - Generate code from description")
        print("  'explain <code>'         - Explain what code does")
        print("  'help'                   - Show this help message")
        print("  'history'                - Show session history")
        print("  'clear'                  - Clear session history")
        print("  'quit' or 'exit'         - Exit the program")
        print("-" * 60)
    
    def generate_code(self, description: str) -> str:
        """Generate code based on description (mock implementation)."""
        # This is a simple mock implementation
        # In a real implementation, this would call an AI API
        
        common_requests = {
            "fibonacci": """def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)""",
            
            "sort": """def sort_list(lst):
    return sorted(lst)""",
            
            "factorial": """def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)""",
            
            "hello world": """print("Hello, World!")""",
            
            "reverse string": """def reverse_string(s):
    return s[::-1]"""
        }
        
        # Simple keyword matching
        description_lower = description.lower()
        for keyword, code in common_requests.items():
            if keyword in description_lower:
                return f"# Generated code for: {description}\n{code}"
        
        # Default response
        return f"""# Code template for: {description}
def your_function():
    # TODO: Implement {description}
    pass"""
    
    def explain_code(self, code: str) -> str:
        """Explain what the given code does (mock implementation)."""
        # Simple code analysis
        explanations = []
        
        if "def " in code:
            explanations.append("This code defines a function.")
        if "for " in code or "while " in code:
            explanations.append("It contains a loop structure.")
        if "if " in code:
            explanations.append("It includes conditional logic.")
        if "return " in code:
            explanations.append("The function returns a value.")
        if "print(" in code:
            explanations.append("It outputs text to the console.")
        
        if not explanations:
            explanations.append("This appears to be a simple code snippet.")
        
        return "Code explanation:\n" + "\n".join(f"• {exp}" for exp in explanations)
    
    def add_to_history(self, command: str, response: str):
        """Add interaction to session history."""
        self.session_history.append({
            "command": command,
            "response": response
        })
    
    def show_history(self):
        """Display session history."""
        if not self.session_history:
            print("No history yet.")
            return
        
        print("\n📋 Session History:")
        print("-" * 40)
        for i, item in enumerate(self.session_history, 1):
            print(f"{i}. Command: {item['command']}")
            print(f"   Response: {item['response'][:100]}...")
            print()
    
    def clear_history(self):
        """Clear session history."""
        self.session_history.clear()
        print("✅ History cleared.")
    
    def process_command(self, user_input: str) -> Optional[str]:
        """Process user command and return response."""
        user_input = user_input.strip()
        
        if not user_input:
            return None
        
        # Handle commands
        if user_input.lower() in ['quit', 'exit']:
            print("👋 Thanks for using FreeCode! Goodbye!")
            return "exit"
        
        elif user_input.lower() == 'help':
            self.display_welcome()
            return None
        
        elif user_input.lower() == 'history':
            self.show_history()
            return None
        
        elif user_input.lower() == 'clear':
            self.clear_history()
            return None
        
        elif user_input.lower().startswith('generate '):
            description = user_input[9:]  # Remove 'generate '
            response = self.generate_code(description)
            self.add_to_history(user_input, response)
            return response
        
        elif user_input.lower().startswith('explain '):
            code = user_input[8:]  # Remove 'explain '
            response = self.explain_code(code)
            self.add_to_history(user_input, response)
            return response
        
        else:
            response = "❓ Unknown command. Type 'help' for available commands."
            return response
    
    def run(self):
        """Main interactive loop."""
        self.display_welcome()
        
        try:
            while True:
                user_input = input("\n🔹 FreeCode> ").strip()
                
                result = self.process_command(user_input)
                
                if result == "exit":
                    break
                elif result:
                    print(f"\n✨ {result}")
        
        except KeyboardInterrupt:
            print("\n👋 Thanks for using FreeCode! Goodbye!")
        except EOFError:
            print("\n👋 Thanks for using FreeCode! Goodbye!")

def main():
    """Main entry point."""
    assistant = FreeCodeAssistant()
    assistant.run()

if __name__ == "__main__":
    main()