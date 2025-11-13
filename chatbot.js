// Complete Research + Prompt Assistant Chatbot
class ResearchAssistant {
    constructor() {
        this.trainingData = {
            "intents": [
                // === PROMPT INTENTS ===
                {
                    "tag": "greeting",
                    "patterns": ["hello", "hi", "hey", "good morning", "good afternoon", "what's up"],
                    "responses": [
                        "Hello! I'm your AI Research & Prompt Assistant. I help with content creation AND monetization research!",
                        "Hi there! I specialize in AI prompts AND content monetization strategies. What would you like to explore?",
                        "Hey! Ready to create amazing content AND discover monetization opportunities?"
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

                // === RESEARCH INTENTS ===
                {
                    "tag": "monetization_research",
                    "patterns": ["monetization", "make money", "earn money", "revenue", "income", "monetize", "profit", "monetisation"],
                    "responses": [
                        "💰 Let's explore monetization opportunities! Which platform are you focusing on?",
                        "🎯 Content monetization research! Are you looking for platform-specific strategies?",
                        "💸 Monetization analysis! Tell me your platform or niche!"
                    ]
                },
                {
                    "tag": "platform_monetization",
                    "patterns": ["youtube money", "tiktok monetization", "instagram earnings", "twitch revenue", "substack", "x earnings", "platform money"],
                    "responses": [
                        "📊 Researching {platform} monetization... Current best strategies include platform-specific features",
                        "💡 {platform} monetization insights and opportunities available now",
                        "🚀 {platform} money-making strategies and requirements"
                    ]
                },
                {
                    "tag": "niche_research",
                    "patterns": ["best niche", "profitable niche", "trending niche", "what niche", "which topic", "content niche", "popular topics"],
                    "responses": [
                        "🔍 Researching profitable niches... Current high-opportunity areas with good monetization potential",
                        "📈 Niche opportunity analysis! Emerging trends with monetization potential",
                        "🎯 Profitable niche research! Factors to consider for sustainable income"
                    ]
                },
                {
                    "tag": "trend_research",
                    "patterns": ["trends", "what's trending", "current trends", "viral topics", "hot topics", "trending now", "what's popular"],
                    "responses": [
                        "📊 Live trend analysis! Currently trending across platforms with monetization potential",
                        "🔥 Real-time trend research! High-engagement topics that can be monetized",
                        "🚀 Trend opportunity report! Content types gaining traction now"
                    ]
                },
                {
                    "tag": "audience_growth",
                    "patterns": ["grow audience", "get followers", "increase subscribers", "audience growth", "build community", "more viewers"],
                    "responses": [
                        "📈 Audience growth strategies! Research shows effective approaches for rapid growth",
                        "👥 Growth hacking research! Current best practices for platform algorithms",
                        "🚀 Audience building insights! Successful patterns for sustainable growth"
                    ]
                },
                {
                    "tag": "revenue_streams",
                    "patterns": ["revenue streams", "income sources", "multiple streams", "diversify income", "money sources", "earnings streams"],
                    "responses": [
                        "💸 Revenue stream analysis! Top diversification strategies for content creators",
                        "💰 Income diversification research! Successful creator portfolio breakdowns",
                        "📊 Multi-stream revenue research! Most accessible options to start"
                    ]
                },
                {
                    "tag": "research_tools",
                    "patterns": ["research tools", "analytics tools", "trend tools", "monetization tools", "what tools", "which software"],
                    "responses": [
                        "🔧 Research & analytics tools for creators: Platform-specific optimization tools",
                        "📈 Monetization research tools: Software to maximize your earnings",
                        "🚀 Creator business tools: Essential apps for content business management"
                    ]
                },
                {
                    "tag": "farewell",
                    "patterns": ["bye", "goodbye", "see you", "thanks", "thank you", "that's all", "exit", "quit"],
                    "responses": [
                        "You're welcome! Happy creating and monetizing! 🎨💸 Come back if you need more help!",
                        "Goodbye! Can't wait to see what you create and monetize! ✨💰",
                        "Thanks for chatting! Remember, great content creates great opportunities. See you next time! 🚀"
                    ]
                }
            ]
        };
        
        // Research data storage
        this.researchData = {
            platforms: {
                "youtube": "YouTube Partner Program, channel memberships, Super Chat, merchandise shelf, brand deals, affiliate marketing",
                "tiktok": "Creator Fund, LIVE gifts, brand partnerships, TikTok Shop, series content, effect house monetization",
                "instagram": "Reels Play bonus, brand collaborations, affiliate marketing, digital products, paid subscriptions",
                "twitch": "Subscriptions, bits, advertisements, brand deals, game sales, affiliate revenue",
                "substack": "Paid newsletters, subscriber-only content, community features, cross-promotion opportunities"
            },
            trends: {
                "current": "AI content tools, micro-learning, community platforms, interactive content, authenticity focus",
                "emerging": "Virtual events, NFT integration, AI personalization, decentralized platforms, educational entertainment"
            }
        };
        
        // Conversation state
        this.conversationState = { step: 0, mode: null };
    }

    // === PROMPT METHODS ===
    
    handleImageCreation(userInput) {
        const input = userInput.toLowerCase();
        
        if (this.conversationState.step === 0) {
            this.conversationState.subject = userInput;
            this.conversationState.step = 1;
            return "Great! What art style are you thinking? (photorealistic, anime, oil painting, cyberpunk, fantasy, etc.)";
        }
        
        if (this.conversationState.step === 1) {
            this.conversationState.style = userInput;
            this.conversationState.step = 2;
            return "Perfect! Now describe the lighting and mood: (dramatic lighting, soft natural light, neon glow, mysterious fog, etc.)";
        }
        
        if (this.conversationState.step === 2) {
            this.conversationState.mood = userInput;
            this.conversationState.step = 3;
            return "Almost done! Any specific details? (close-up, wide shot, specific colors, background elements, time of day)";
        }
        
        if (this.conversationState.step === 3) {
            this.conversationState.details = userInput;
            const finalPrompt = this.buildFinalPrompt();
            this.conversationState = { step: 0, mode: null };
            
            return `🎨 **Here's your crafted prompt:**\n"${finalPrompt}"\n\n💡 **Pro tips:**\n• Copy this directly into your AI art tool\n• Add --ar 16:9 for widescreen\n• Adjust specific words to fine-tune results\n\nReady to create another?`;
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

    handleVideoCreation(userInput) {
        const input = userInput.toLowerCase();
        
        if (this.conversationState.step === 0) {
            this.conversationState.image = userInput;
            this.conversationState.step = 1;
            return "🎬 Great! What type of motion do you want?\n• Camera movement (zoom, pan, dolly)\n• Object animation (floating, rotating, growing)\n• Environmental effects (wind, water flow, particles)\n• Character movement (walking, talking, gestures)";
        }
        
        if (this.conversationState.step === 1) {
            this.conversationState.motion = userInput;
            this.conversationState.step = 2;
            return "📹 Perfect! Now describe the speed and duration:\n• Slow motion, real-time, or time-lapse?\n• Short clip (2-4 seconds) or longer sequence?\n• Smooth and cinematic or energetic and quick?";
        }
        
        if (this.conversationState.step === 2) {
            this.conversationState.speed = userInput;
            this.conversationState.step = 3;
            return "🌟 Almost done! Any specific visual style or effects?\n• Cinematic, raw, stylized, glitch art\n• Transitions (fade, cut, dissolve)\n• Color grading or filter effects\n• Loopable or one-time animation?";
        }
        
        if (this.conversationState.step === 3) {
            this.conversationState.style = userInput;
            const finalPrompt = this.buildFinalVideoPrompt();
            this.conversationState = { step: 0, mode: null };
            
            return `🎥 **Here's your video prompt:**\n"${finalPrompt}"\n\n💡 **Video Tips:**\n• Use this in RunwayML, Pika Labs, or similar tools\n• Add duration parameters (--length 4s)\n• Specify motion strength if available\n• Consider adding camera angles\n\nReady to animate another image?`;
        }
        
        return "Let's start over. What image would you like to animate?";
    }

    buildFinalVideoPrompt() {
        const image = this.conversationState.image || "your image";
        const motion = this.conversationState.motion || "smooth movement";
        const speed = this.conversationState.speed || "cinematic pacing";
        const style = this.conversationState.style || "professional quality";
        
        return `Animate: ${image}, with ${motion}, ${speed}, ${style}, seamless motion, stable camera, professional cinematography`;
    }

    generateQuickPrompt(userInput) {
        const quickPrompts = {
            "fantasy": "A majestic dragon soaring over ancient mountains, fantasy art, dramatic lighting, highly detailed, epic scale, 4K",
            "cyberpunk": "Cyberpunk city street at night, neon lights reflecting on wet pavement, futuristic architecture, cinematic, moody lighting",
            "portrait": "Professional portrait of a person with striking features, studio lighting, sharp focus, photorealistic, 8K resolution",
            "anime": "Cute anime character with colorful hair, studio ghibli style, soft lighting, joyful expression, detailed background",
            "landscape": "Serene mountain landscape at golden hour, photorealistic, dramatic clouds, peaceful atmosphere, Ansel Adams style",
            "sci-fi": "Futuristic spaceship interior, clean lines, holographic displays, sci-fi aesthetic, cinematic lighting, detailed",
            "abstract": "Abstract geometric patterns, vibrant colors, modern art, clean composition, bold shapes, contemporary design"
        };
        
        const input = userInput.toLowerCase();
        for (const [key, prompt] of Object.entries(quickPrompts)) {
            if (input.includes(key)) {
                return `🎨 **Quick ${key} prompt:**\n"${prompt}"\n\nWant to customize this or try another style?`;
            }
        }
        return null;
    }

    // === RESEARCH METHODS ===
    
    handleMonetizationResearch(userInput) {
        const input = userInput.toLowerCase();
        
        if (this.conversationState.step === 0) {
            this.conversationState.researchTopic = "monetization";
            this.conversationState.step = 1;
            return "💰 **Monetization Research Started!**\n\nWhich platform are you focusing on?\n• YouTube\n• TikTok\n• Instagram\n• Twitch\n• Newsletter/Substack\n• Or general strategies?\n\nTell me your focus area:";
        }
        
        if (this.conversationState.step === 1) {
            this.conversationState.platform = userInput;
            this.conversationState.step = 2;
            
            const platformData = this.getPlatformMonetization(userInput);
            return `📊 **${userInput} Monetization Research:**\n\n${platformData}\n\nWhat specific aspect interests you most?\n• Ad revenue\n• Sponsorships\n• Products\n• Memberships\n• Affiliate marketing`;
        }
        
        if (this.conversationState.step === 2) {
            const aspect = userInput.toLowerCase();
            const detailedResearch = this.getDetailedMonetization(this.conversationState.platform, aspect);
            this.conversationState = { step: 0, mode: null };
            
            return `🎯 **Detailed ${aspect} Research for ${this.conversationState.platform}:**\n\n${detailedResearch}\n\n💡 **Action Steps:**\n1. Analyze your current content\n2. Identify partnership opportunities\n3. Test small before scaling\n4. Track your metrics\n\nNeed research on another platform or aspect?`;
        }
        
        return "Let's restart monetization research. Which platform interests you?";
    }

    getPlatformMonetization(platform) {
        const platformLower = platform.toLowerCase();
        const strategies = {
            "youtube": "✅ **YouTube Monetization:**\n• AdSense revenue (requires 1k subs + 4k watch hours)\n• Channel Memberships (requires 30k subs)\n• Super Chat & Super Stickers\n• YouTube Premium revenue\n• Shopping affiliate integration\n• Brand deals & sponsorships\n• Merchandise shelf integration\n\n💰 **Earning Potential:** $3-10 per 1000 views (varies by niche)",
            
            "tiktok": "✅ **TikTok Monetization:**\n• Creator Fund (regional availability)\n• LIVE Gifts from viewers\n• Series content (premium content)\n• TikTok Shop commissions\n• Brand partnership deals\n• Effect House creator rewards\n• Video Promote program\n\n💰 **Earning Potential:** $0.50-2.00 per 1000 views + brand deals",
            
            "instagram": "✅ **Instagram Monetization:**\n• Reels Play bonus program\n• Brand collaborations & sponsored posts\n• Affiliate marketing in posts\n• Badges in Instagram Live\n• Subscriptions for exclusive content\n• Digital product sales\n• Cross-promotion opportunities\n\n💰 **Earning Potential:** $500-5000 per sponsored post (depending on followers)",
            
            "twitch": "✅ **Twitch Monetization:**\n• Subscriptions (Tier 1, 2, 3)\n• Bits (cheering currency)\n• Ad revenue share\n• Brand sponsorship deals\n• Game sales commissions\n• Affiliate program revenue\n• Extensions and integrations\n\n💰 **Earning Potential:** $2.50-4.00 per subscriber monthly + ads + bits",
            
            "general": "💰 **General Monetization Strategies:**\n• Multiple revenue streams diversification\n• Digital product creation (eBooks, courses)\n• Service offerings (coaching, consulting)\n• Membership communities\n• Affiliate marketing programs\n• Licensing content\n• Speaking engagements\n\n🎯 **Key Success Factor:** Build audience trust first, monetize second"
        };
        
        for (const [key, value] of Object.entries(strategies)) {
            if (platformLower.includes(key)) {
                return value;
            }
        }
        
        return strategies.general;
    }

    getDetailedMonetization(platform, aspect) {
        const researchData = {
            "ad revenue": `📈 **Ad Revenue Optimization for ${platform}:**\n\n• Focus on high CPM content categories (finance, tech, business)\n• Optimize video length for maximum ad placements\n• Use strategic mid-roll placement without disrupting viewer experience\n• Build loyal audience for better watch time and retention\n• Create evergreen content for consistent long-term revenue\n• Cross-promote to boost overall views and channel authority\n\n💡 **Pro Tip:** Analyze your audience demographics to target higher-value advertisers`,

            "sponsorships": `🤝 **Sponsorship Strategies for ${platform}:**\n\n• Build professional media kit with detailed audience demographics\n• Focus on niche-specific brands that align with your content\n• Create sponsorship-friendly content formats (integrations, reviews)\n• Develop case studies showing past collaboration success metrics\n• Network with brand managers and agencies in your niche\n• Offer value beyond simple product placement (content creation, audience insights)\n\n💡 **Pro Tip:** Start with smaller brands to build your portfolio before approaching larger companies`,

            "products": `🛍️ **Product Monetization for ${platform}:**\n\n• Start with low-risk digital products (eBooks, presets, templates)\n• Validate demand through audience feedback and pre-orders\n• Create products that solve specific problems for your audience\n• Use your platform to drive traffic and build product awareness\n• Consider tiered pricing strategies (basic, pro, enterprise)\n• Bundle products for higher value offers and increased average order value\n\n💡 **Pro Tip:** Create limited-time offers to drive urgency and initial sales`,

            "memberships": `⭐ **Membership Program Strategies for ${platform}:**\n\n• Offer exclusive content, early access, or community features\n• Create tiered membership levels with increasing value\n• Provide consistent, predictable value to retain members long-term\n• Use your main platform to showcase membership benefits and success stories\n• Foster community engagement through exclusive events and interactions\n• Offer behind-the-scenes content, direct access, or personalized help\n\n💡 **Pro Tip:** Start with a small group of founding members to refine your offering before scaling`,

            "affiliate": `🔗 **Affiliate Marketing for ${platform}:**\n\n• Choose products highly relevant to your niche and audience interests\n• Always disclose affiliate relationships transparently and authentically\n• Create genuine reviews, tutorials, and use-case demonstrations\n• Track performance with dedicated affiliate links and analytics\n• Build trust through honest recommendations and personal experience\n• Focus on products you actually use, believe in, and would recommend anyway\n\n💡 **Pro Tip:** Create comparison content showing why you chose specific products over alternatives`
        };
        
        return researchData[aspect] || `🔍 **Researching ${aspect} for ${platform}:**\n\nFocus on providing genuine value to your audience while exploring ${aspect} opportunities. Build trust first, and the monetization will follow naturally as you solve real problems for your viewers/readers/followers.`;
    }

    // === MAIN RESPONSE HANDLER ===
    
    findBestResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        // If we're already in a conversation, continue it
        if (this.conversationState.step > 0) {
            if (this.conversationState.mode === 'research') {
                return this.handleMonetizationResearch(userInput);
            } else if (this.conversationState.hasOwnProperty('subject')) {
                return this.handleImageCreation(userInput);
            } else if (this.conversationState.hasOwnProperty('image')) {
                return this.handleVideoCreation(userInput);
            }
        }
        
        // Check for quick prompts first
        const quickPrompt = this.generateQuickPrompt(input);
        if (quickPrompt) {
            return quickPrompt;
        }
        
        // === CHECK FOR RESEARCH KEYWORDS FIRST ===
        const researchKeywords = [
            "monetiz", "money", "earn", "revenue", "income", "profit", 
            "niche", "trend", "growth", "research", "analytics",
            "youtube", "tiktok", "instagram", "twitch", "substack",
            "sponsorship", "affiliate", "ads", "membership", "subscribers",
            "cash", "dollars", "euros", "income", "wealth", "rich"
        ];
        
        if (researchKeywords.some(keyword => input.includes(keyword))) {
            this.conversationState = { step: 0, mode: 'research' };
            return this.handleMonetizationResearch(input);
        }
        
        // Reset for new conversations
        this.conversationState = { step: 0, mode: null };
        
        // Check for platform names
        let platform = "";
        const platforms = ["midjourney", "dall-e", "stable diffusion", "runwayml", "leonardo", "youtube", "tiktok", "instagram", "twitch"];
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
                        const platformData = this.researchData.platforms[platform] || "multiple revenue streams and audience engagement strategies";
                        response = response.replace("{platform}", platform)
                                           .replace("{platform_strategies}", platformData);
                    }
                    
                    // Start image creation flow
                    if (intent.tag === 'text_to_image_help') {
                        this.conversationState.step = 0;
                        this.conversationState.subject = "";
                        this.conversationState.mode = 'prompt';
                        return this.handleImageCreation(input);
                    }
                    
                    // Start video creation flow
                    if (intent.tag === 'image_to_video_help') {
                        this.conversationState.step = 0;
                        this.conversationState.image = "";
                        this.conversationState.mode = 'prompt';
                        return this.handleVideoCreation(input);
                    }
                    
                    // Start research flow for monetization
                    if (intent.tag === 'monetization_research') {
                        this.conversationState.step = 0;
                        this.conversationState.mode = 'research';
                        return this.handleMonetizationResearch(input);
                    }
                    
                    return response;
                }
            }
        }
        
        // Default response
        return `🤖 **I'm your Research & Prompt Assistant!** 

🎨 **AI Art Features:**
• "Create an image" - Step-by-step prompt builder
• "Fantasy"/"Cyberpunk" - Instant style prompts  
• "Make video from image" - Video creation
• "Show examples" - Prompt examples
• "Art styles" - Style recommendations

💰 **Monetization Research:**
• "Monetization strategies" - Platform-specific research
• "YouTube money" - YouTube monetization deep dive
• "Best niches" - Profitable content research
• "Trend research" - Current opportunities
• "Grow audience" - Growth strategies
• "Revenue streams" - Income diversification
• "Make money on TikTok" - Platform-specific tips

What would you like to explore?`;
    }

    async processMessage(userMessage) {
        return this.findBestResponse(userMessage);
    }
}

// Initialize the chatbot
const assistant = new ResearchAssistant();

// Function to handle chat
window.chatWithBot = async function(userMessage) {
    return await assistant.processMessage(userMessage);
};
