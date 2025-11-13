// Complete Research + Prompt Assistant Chatbot
class ResearchAssistant {
    constructor() {
        this.trainingData = {
            "intents": [
                // === EXISTING PROMPT INTENTS ===
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
                // ... keep ALL your existing prompt intents here ...
                // Just add these NEW research intents below
                
                // === NEW RESEARCH INTENTS ===
                {
                    "tag": "monetization_research",
                    "patterns": ["monetization", "make money", "earn money", "revenue", "income", "monetize", "profit", "monetisation"],
                    "responses": [
                        "💰 Let's explore monetization opportunities! Which platform are you focusing on?\n• YouTube\n• TikTok\n• Instagram\n• Twitter/X\n• Twitch\n• Newsletter\n• Or general strategies?",
                        "🎯 Content monetization research! Are you looking for:\n• Ad revenue strategies\n• Sponsorship deals\n• Product sales\n• Membership programs\n• Affiliate marketing\n• Or platform-specific tips?",
                        "💸 Monetization analysis! Tell me:\n• Your content niche\n• Current platform\n• Audience size\n• And I'll research the best opportunities!"
                    ]
                },
                {
                    "tag": "platform_monetization",
                    "patterns": ["youtube money", "tiktok monetization", "instagram earnings", "twitch revenue", "substack", "newsletter", "x earnings"],
                    "responses": [
                        "📊 Researching {platform} monetization... Current best strategies include:\n• {platform_strategies}\n\nWant deeper analysis on any of these?",
                        "💡 {platform} monetization insights:\n• Top revenue streams right now\n• Emerging opportunities\n• Platform-specific requirements\n• Success case studies",
                        "🚀 {platform} money-making strategies:\n• Direct monetization options\n• Indirect opportunities\n• Audience building tips\n• Algorithm optimization"
                    ]
                },
                {
                    "tag": "niche_research",
                    "patterns": ["best niche", "profitable niche", "trending niche", "what niche", "which topic", "content niche", "popular topics"],
                    "responses": [
                        "🔍 Researching profitable niches... Current high-opportunity areas:\n• AI tool tutorials\n• Sustainable living\n• Personal finance basics\n• Mental wellness\n• Remote work tools\n• Which interests you?",
                        "📈 Niche opportunity analysis! Emerging trends with monetization potential:\n• Micro-learning content\n• Niche hobby deep dives\n• Local community content\n• Solution-based tutorials\n\nTell me your interests!",
                        "🎯 Profitable niche research! Factors to consider:\n• Passion + demand + monetization potential\n• Current trending: AI education, productivity, health tech\n• Evergreen: personal finance, relationships, self-improvement"
                    ]
                },
                {
                    "tag": "trend_research",
                    "patterns": ["trends", "what's trending", "current trends", "viral topics", "hot topics", "trending now", "what's popular"],
                    "responses": [
                        "📊 Live trend analysis! Currently trending across platforms:\n• AI content creation tools\n• Productivity optimization\n• Mental health awareness\n• Sustainable technology\n• Remote work solutions\n\nWant specific platform trends?",
                        "🔥 Real-time trend research! High-engagement topics:\n• Short-form educational content\n• Interactive storytelling\n• Community-driven content\n• Problem-solving tutorials\n• Behind-the-scenes content",
                        "🚀 Trend opportunity report! Content types gaining traction:\n• Micro-tutorials (under 60 seconds)\n• Personal journey documentation\n• Tool/software reviews\n• Industry news breakdowns\n• Community Q&A sessions"
                    ]
                },
                {
                    "tag": "audience_growth",
                    "patterns": ["grow audience", "get followers", "increase subscribers", "audience growth", "build community", "more viewers"],
                    "responses": [
                        "📈 Audience growth strategies! Research shows effective approaches:\n• Consistent value delivery\n• Community engagement\n• Cross-platform promotion\n• Collaboration networks\n• Data-driven content optimization",
                        "👥 Growth hacking research! Current best practices:\n• Interactive content formats\n• Strategic hashtag use\n• Algorithm-friendly posting times\n• Engagement-driven CTAs\n• Value-first content strategy",
                        "🚀 Audience building insights! Successful patterns:\n• Niche-specific value propositions\n• Authentic creator-audience relationships\n• Problem-solving content focus\n• Strategic content repurposing\n• Data-informed iteration"
                    ]
                },
                {
                    "tag": "revenue_streams",
                    "patterns": ["revenue streams", "income sources", "multiple streams", "diversify income", "money sources", "earnings streams"],
                    "responses": [
                        "💸 Revenue stream analysis! Top diversification strategies:\n• Ad revenue + Sponsorships + Affiliate\n• Digital products + Services\n• Memberships + Donations\n• Licensing + Speaking\n\nWhich stream interests you?",
                        "💰 Income diversification research! Successful creator portfolios include:\n• 40% Brand deals\n• 25% Own products\n• 20% Ad revenue\n• 15% Other streams\n\nWant to explore specific streams?",
                        "📊 Multi-stream revenue research! Most accessible options:\n• Affiliate marketing (quick start)\n• Digital products (scalable)\n• Coaching/consulting (high-value)\n• Sponsorships (brand relationships)"
                    ]
                },
                {
                    "tag": "research_tools",
                    "patterns": ["research tools", "analytics tools", "trend tools", "monetization tools", "what tools", "which software"],
                    "responses": [
                        "🔧 Research & analytics tools for creators:\n• Google Trends (free trend research)\n• TubeBuddy (YouTube optimization)\n• Social Blade (platform analytics)\n• SEMrush (content research)\n• BuzzSumo (viral content analysis)",
                        "📈 Monetization research tools:\n• Patreon (membership analytics)\n• ConvertKit (email monetization)\n• Shopify (product sales)\n• Podia (digital products)\n• Circle (community platforms)",
                        "🚀 Creator business tools:\n• Notion (content planning)\n• Canva (visual content)\n• Descript (video editing)\n• ChatGPT (content ideation)\n• Metricool (cross-platform analytics)"
                    ]
                }
                // ... keep your existing farewell intent at the end ...
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
        this.conversationState = { step: 0, mode: null }; // Added mode for research/prompt
    }

    // === EXISTING PROMPT METHODS (Keep all your working ones) ===
    
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
            
            return `🎨 **Here's your crafted prompt:**\n"${finalPrompt}"\n\n💡 **Pro tips:**\n• Copy this directly into your AI art tool\n• Add --ar 16:9 for widescreen\n\nReady to create another?`;
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
        // ... keep your existing video creation code ...
        // (I'm shortening for space, but keep your working version)
        return this.handleImageCreation(userInput); // placeholder
    }

    generateQuickPrompt(userInput) {
        const quickPrompts = {
            "fantasy": "A majestic dragon soaring over ancient mountains, fantasy art, dramatic lighting, highly detailed, epic scale, 4K",
            "cyberpunk": "Cyberpunk city street at night, neon lights reflecting on wet pavement, futuristic architecture, cinematic, moody lighting"
            // ... keep your existing quick prompts ...
        };
        
        const input = userInput.toLowerCase();
        for (const [key, prompt] of Object.entries(quickPrompts)) {
            if (input.includes(key)) {
                return `🎨 **Quick ${key} prompt:**\n"${prompt}"\n\nWant to customize this or try another style?`;
            }
        }
        return null;
    }

    // === NEW RESEARCH METHODS ===
    
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
            "youtube": "✅ **YouTube Monetization:**\n• AdSense revenue (requires 1k subs + 4k watch hours)\n• Channel Memberships (requires 30k subs)\n• Super Chat & Super Stickers\n• YouTube Premium revenue\n• Shopping affiliate integration\n• Brand deals & sponsorships\n• Merchandise shelf integration",
            
            "tiktok": "✅ **TikTok Monetization:**\n• Creator Fund (regional availability)\n• LIVE Gifts from viewers\n• Series content (premium content)\n• TikTok Shop commissions\n• Brand partnership deals\n• Effect House creator rewards\n• Video Promote program",
            
            "instagram": "✅ **Instagram Monetization:**\n• Reels Play bonus program\n• Brand collaborations & sponsored posts\n• Affiliate marketing in posts\n• Badges in Instagram Live\n• Subscriptions for exclusive content\n• Digital product sales\n• Cross-promotion opportunities",
            
            "twitch": "✅ **Twitch Monetization:**\n• Subscriptions (Tier 1, 2, 3)\n• Bits (cheering currency)\n• Ad revenue share\n• Brand sponsorship deals\n• Game sales commissions\n• Affiliate program revenue\n• Extensions and integrations",
            
            "general": "💰 **General Monetization Strategies:**\n• Multiple revenue streams diversification\n• Digital product creation (eBooks, courses)\n• Service offerings (coaching, consulting)\n• Membership communities\n• Affiliate marketing programs\n• Licensing content\n• Speaking engagements"
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
            "ad revenue": `📈 **Ad Revenue Optimization for ${platform}:**\n\n• Focus on high CPM content categories\n• Optimize video length for ad placements\n• Use strategic mid-roll placement\n• Build loyal audience for better retention\n• Create evergreen content for consistent revenue\n• Cross-promote to boost overall views`,
            
            "sponsorships": `🤝 **Sponsorship Strategies for ${platform}:**\n\n• Build media kit with audience demographics\n• Focus on niche-specific brands\n• Create sponsorship-friendly content formats\n• Develop case studies of past collaborations\n• Network with brand managers in your niche\n• Offer value beyond simple product placement`,
            
            "products": `🛍️ **Product Monetization for ${platform}:**\n\n• Start with low-risk digital products\n• Validate demand through audience feedback\n• Create products that solve specific problems\n• Use platform to drive traffic to products\n• Consider tiered pricing strategies\n• Bundle products for higher value offers`,
            
            "memberships": `⭐ **Membership Program Strategies:**\n\n• Offer exclusive content or community access\n• Create tiered membership levels\n• Provide consistent value to retain members\n• Use platform to showcase membership benefits\n• Foster community engagement\n• Offer early access or behind-the-scenes content`,
            
            "affiliate": `🔗 **Affiliate Marketing for ${platform}:**\n\n• Choose products relevant to your niche\n• Disclose affiliate relationships transparently\n• Create genuine reviews and tutorials\n• Track performance with affiliate links\n• Build trust through honest recommendations\n• Focus on products you actually use and believe in`
        };
        
        return researchData[aspect] || `Researching ${aspect} for ${platform}... Focus on providing genuine value while exploring monetization opportunities.`;
    }

    // === UPDATED MAIN RESPONSE HANDLER ===
    
    findBestResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        // If we're already in a conversation, continue it
        if (this.conversationState.step > 0) {
            if (this.conversationState.mode === 'research') {
                return this.handleMonetizationResearch(userInput);
            } else if (this.conversationState.hasOwnProperty('subject')) {
                return this.handleImageCreation(userInput);
            } else {
                return this.handleVideoCreation(userInput);
            }
        }
        
        // Check for quick prompts first
        const quickPrompt = this.generateQuickPrompt(input);
        if (quickPrompt) {
            return quickPrompt;
        }
        
        // Check for research keywords
        const researchKeywords = ["monetiz", "money", "earn", "revenue", "income", "profit", "niche", "trend", "growth", "research", "analytics"];
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
        return "I'm your Research & Prompt Assistant! I can help with:\n\n🎨 **AI Art Prompts:**\n• 'Create an image' - Step-by-step prompt builder\n• 'Fantasy' - Instant style prompts\n• 'Make video from image' - Video creation\n\n💰 **Monetization Research:**\n• 'Monetization strategies' - Platform-specific research\n• 'Best niches' - Profitable content research\n• 'Audience growth' - Growth strategies\n• 'Trend research' - Current opportunities\n\nWhat would you like to explore?";
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
