// Complete Chatbot Code - Copy and Replace Everything
class PromptAssistant {
    constructor() {
        this.trainingData = {
            "intents": [
                {
                    "tag": "greeting",
                    "patterns": ["hello", "hi", "hey", "good morning", "good afternoon", "what's up"],
                    "responses": [
                        "Hello! I'm your AI prompt assistant. Ready to create some amazing AI art?",
                        "Hi there! I specialize in text-to-image and image-to-video prompts. What would you like to create?",
                        "Hey! Let's make some creative magic happen. What project are you working on?"
                    ]
                },
                {
                    "tag": "text_to_image_help",
                    "patterns": ["create image", "make image", "text to image", "generate image", "image prompt", "draw something", "ai art"],
                    "responses": [
                        "🚀 Let's create an amazing image prompt! What's your main subject or concept?",
                        "🎨 Image prompt time! Tell me what you're imagining - a person, place, fantasy scene, or something else?",
                        "✨ Let's craft the perfect prompt! What's the central theme or subject for your image?"
                    ]
                },
                {
                    "tag": "image_to_video_help", 
                    "patterns": ["turn image into video", "make video from image", "image to video", "animate image", "video prompt", "create video", "motion"],
                    "responses": [
                        "🎥 Exciting! Let's bring an image to life. What kind of motion are you thinking? (camera movement, object animation, etc.)",
                        "📹 Video creation time! Should we add camera motion, object movement, or both to your image?",
                        "🌟 Let's animate your image! Describe what should move and how."
                    ]
                },
                {
                    "tag": "style_help",
                    "patterns": ["styles", "art styles", "what styles", "different styles", "artistic styles"],
                    "responses": [
                        "🎭 Popular art styles: photorealistic, anime, oil painting, watercolor, cyberpunk, fantasy art, minimalist, impressionist, digital art, concept art. Which interests you?",
                        "🖼️ Common styles: realistic, cartoon, 3D render, pixel art, steampunk, surrealism, abstract, vintage, futuristic. Want details on any of these?",
                        "🌈 Style options: cinematic, comic book, charcoal sketch, claymation, low poly, vector art, glitch art. Which style fits your vision?"
                    ]
                },
                {
                    "tag": "platform_specific",
                    "patterns": ["midjourney", "dall-e", "stable diffusion", "runwayml", "leonardo", "comfyui", "automatic1111"],
                    "responses": [
                        "I can help with platform-specific parameters! For {platform}, common settings include aspect ratios, quality modifiers, and style tags. What specifically do you need?",
                        "{platform} has its own strengths! I can help you craft prompts optimized for this tool. What are you trying to create?",
                        "Great choice! {platform} works well with specific prompt structures. Let me help you build the perfect prompt for this platform."
                    ]
                },
                {
                    "tag": "prompt_examples",
                    "patterns": ["show examples", "example prompts", "give me examples", "demo prompts"],
                    "responses": [
                        "📝 **Text-to-Image Examples:**\n• 'A majestic dragon soaring over medieval castle, fantasy art, dramatic lighting, highly detailed'\n• 'Cyberpunk street at night, neon lights, rainy streets, futuristic city, cinematic'\n• 'Cute anime character with pink hair, studio ghibli style, soft lighting, joyful expression'\n\nWhich type of example would you like more of?",
                        "🎬 **Image-to-Video Examples:**\n• 'Slow zoom on character's face, cinematic, smooth motion, 4 seconds'\n• 'Camera pan across landscape, revealing mountains, golden hour lighting'\n• 'Objects floating and rotating in space, dreamlike, seamless loop'\n\nWant me to generate a specific example for your project?",
                        "✨ **Mixed Examples:**\nImage: 'Ancient forest with glowing mushrooms, magical, bioluminescent'\nVideo: 'Mushrooms gently pulsing with light, slow camera dolly through forest'\n\nNeed examples for a particular style or subject?"
                    ]
                },
                {
                    "tag": "technical_help",
                    "patterns": ["parameters", "settings", "config", "options", "aspect ratio", "quality", "resolution"],
                    "responses": [
                        "🔧 Common parameters:\n• Aspect ratios: --ar 16:9, 1:1, 4:3, 9:16\n• Quality: --quality 1, 2, 3 or --q 0.5, 1, 2\n• Styles: --style raw, expressive, cute\n• Seeds: --seed 12345 for consistency\n\nWhich platform are you using?",
                        "⚙️ Technical settings vary by platform:\n• Midjourney: --ar, --style, --chaos\n• Stable Diffusion: steps, CFG scale, samplers\n• DALL-E: sizes, quality settings\n\nWhat specific parameter do you need help with?",
                        "📊 Optimization tips:\n• Use clear, descriptive language\n• Specify lighting and composition\n• Include style references\n• Add quality terms like '4K', 'detailed', 'professional'\n\nNeed help with specific settings?"
                    ]
                },
                {
                    "tag": "farewell",
                    "patterns": ["bye", "goodbye", "see you", "thanks", "thank you", "that's all", "exit", "quit"],
                    "responses": [
                        "You're welcome! Happy creating! 🎨 Come back if you need more prompt help!",
                        "Goodbye! Can't wait to see what you create! ✨",
                        "Thanks for chatting! Remember, great prompts create great art. See you next time! 🚀"
                    ]
                }
            ]
        };
        
        // Add this line - it tracks the conversation
        this.conversationState = { step: 0 };
    }

    // === ADD THESE NEW METHODS ===
    
    handleImageCreation(userInput) {
        const input = userInput.toLowerCase();
        
        // Step 1: Get the subject
        if (this.conversationState.step === 0) {
            this.conversationState.subject = userInput;
            this.conversationState.step = 1;
            return "Great! What art style are you thinking? (photorealistic, anime, oil painting, cyberpunk, fantasy, etc.)";
        }
        
        // Step 2: Get the style
        if (this.conversationState.step === 1) {
            this.conversationState.style = userInput;
            this.conversationState.step = 2;
            return "Perfect! Now describe the lighting and mood: (dramatic lighting, soft natural light, neon glow, mysterious fog, etc.)";
        }
        
        // Step 3: Get the lighting/mood
        if (this.conversationState.step === 2) {
            this.conversationState.mood = userInput;
            this.conversationState.step = 3;
            return "Almost done! Any specific details? (close-up, wide shot, specific colors, background elements, time of day)";
        }
        
        // Step 4: Build final prompt
        if (this.conversationState.step === 3) {
            this.conversationState.details = userInput;
            const finalPrompt = this.buildFinalPrompt();
            this.conversationState = { step: 0 }; // Reset for next time
            
            return `🎨 **Here's your crafted prompt:**\n"${finalPrompt}"\n\n💡 **Pro tips:**\n• Copy this directly into your AI art tool\n• Adjust specific words to fine-tune results\n• Add --ar 16:9 for widescreen or other parameters\n\nReady to create another?`;
        }
        
        return "Let's start over. What would you like to create?";
    }

    buildFinalPrompt() {
        const subject = this.conversationState.subject || "your subject";
        const style = this.conversationState.style || "professional style";
        const mood = this.conversationState.mood || "well-lit";
        const details = this.conversationState.details || "highly detailed";
        
        return `${subject}, ${style}, ${mood}, ${details}, professional composition, award-winning, 4K resolution`;
    }

    findBestResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        // If we're already in a conversation, continue it
        if (this.conversationState.step > 0) {
            return this.handleImageCreation(userInput);
        }
        
        // Reset for new conversations
        this.conversationState = { step: 0 };
        
        // Check for platform names
        let platform = "";
        const platforms = ["midjourney", "dall-e", "stable diffusion", "runwayml", "leonardo"];
        for (const p of platforms) {
            if (input.includes(p)) {
                platform = p;
                break;
            }
        }
        
        // Check each intent
        for (let intent of this.trainingData.intents) {
            for (let pattern of intent.patterns) {
                if (input.includes(pattern.toLowerCase())) {
                    let response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                    
                    // Replace platform placeholder if found
                    if (platform && response.includes("{platform}")) {
                        response = response.replace("{platform}", platform);
                    }
                    
                    // Start image creation flow
                    if (intent.tag === 'text_to_image_help') {
                        this.conversationState.step = 0;
                        return this.handleImageCreation(input);
                    }
                    
                    return response;
                }
            }
        }
        
        // Default response
        return "I'm here to help with AI art prompts! Try:\n• 'Create an image of a dragon'\n• 'Make a video from an image' \n• 'Show me style examples'\n• 'Help with Midjourney parameters'\n\nWhat would you like to explore?";
    }

    async processMessage(userMessage) {
        return this.findBestResponse(userMessage);
    }
}

// Initialize the chatbot
const assistant = new PromptAssistant();

// Function to handle chat
window.chatWithBot = async function(userMessage) {
    return await assistant.processMessage(userMessage);
};
