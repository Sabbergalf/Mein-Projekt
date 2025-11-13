// Simple chatbot with training data
class PromptAssistant {
  constructor() {
    this.trainingData = {};
    this.loadTrainingData();
  }

  async loadTrainingData() {
    // We'll load from our JSON file
    this.trainingData = {
      "intents": [
        {
          "tag": "greeting",
          "patterns": ["hello", "hi", "hey", "good morning"],
          "responses": ["Hello! I'm your AI prompt assistant. How can I help?"]
        },
        {
          "tag": "text_to_image_help", 
          "patterns": ["create image", "make image", "text to image"],
          "responses": ["Let's create an image prompt! What's your main subject?"]
        }
        // We'll add more here
      ]
    };
  }

  findBestResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Check each intent
    for (let intent of this.trainingData.intents) {
      for (let pattern of intent.patterns) {
        if (input.includes(pattern.toLowerCase())) {
          // Return a random response from this intent
          const randomResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
          return randomResponse;
        }
      }
    }
    
    // Default response if no match found
    return "I'm learning to help with AI prompts! Try asking me about text-to-image or image-to-video creation.";
  }

  // Method to handle conversation flow
  async processMessage(userMessage) {
    return this.findBestResponse(userMessage);
  }
}

// Initialize the chatbot
const assistant = new PromptAssistant();

// Function to handle chat (we'll connect this to your UI)
window.chatWithBot = async function(userMessage) {
  return await assistant.processMessage(userMessage);
};
