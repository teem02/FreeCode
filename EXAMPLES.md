# FreeCode Examples

This file demonstrates how to use FreeCode AI Coding Assistant.

## Example Session

```
🔹 FreeCode> generate fibonacci function
✨ # Generated code for: fibonacci function
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

🔹 FreeCode> explain def bubble_sort(arr): 
    for i in range(len(arr)):
        for j in range(0, len(arr)-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

✨ Code explanation:
• This code defines a function.
• It contains a loop structure.
• The function returns a value.

🔹 FreeCode> generate hello world
✨ # Generated code for: hello world
print("Hello, World!")

🔹 FreeCode> help
============================================================
🤖 Welcome to FreeCode - AI Coding Assistant
============================================================
Commands:
  'generate <description>' - Generate code from description
  'explain <code>'         - Explain what code does
  'help'                   - Show this help message
  'history'                - Show session history
  'clear'                  - Clear session history
  'quit' or 'exit'         - Exit the program
------------------------------------------------------------

🔹 FreeCode> quit
👋 Thanks for using FreeCode! Goodbye!
```

## Supported Code Generation Patterns

The current version recognizes these patterns:
- `fibonacci` - Generates fibonacci function
- `sort` - Generates sorting function  
- `factorial` - Generates factorial function
- `hello world` - Generates hello world print statement
- `reverse string` - Generates string reversal function

For other descriptions, it generates a template function with TODO comments.

## Code Explanation Features

The explain command can identify:
- Function definitions
- Loop structures (for/while)
- Conditional logic (if statements)
- Return statements
- Print statements

## Future Enhancements

This is a basic implementation. Future versions could include:
- Integration with actual AI APIs (OpenAI, Anthropic, etc.)
- More sophisticated code analysis
- Support for multiple programming languages
- Code optimization suggestions
- Bug detection and fixes
- Integration with IDEs and editors