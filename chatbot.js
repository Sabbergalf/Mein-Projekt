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
