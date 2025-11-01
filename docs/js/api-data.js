const apiData = {
    info: {
        name: "Kickbase API Documentation",
        version: "12.0.0",
        description: "Unofficial documentation of the Kickbase API made by Kai Detmers",
        baseUrl: "https://api.kickbase.com"
    },
    endpoints: [
        {
            id: "account-auth",
            name: "Account & Authentication",
            description: "Endpoints for user authentication and account management",
            endpoints: [
                {
                    id: "login",
                    name: "Login",
                    method: "POST",
                    path: "/v4/user/login",
                    description: "Authenticate user and receive access token",
                    parameters: [
                        {
                            name: "email",
                            type: "string",
                            required: true,
                            description: "User's email address"
                        },
                        {
                            name: "password",
                            type: "string",
                            required: true,
                            description: "User's password"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful authentication"
                        },
                        "401": {
                            description: "Invalid credentials"
                        }
                    }
                },
                {
                    id: "register",
                    name: "Register User",
                    method: "POST",
                    path: "/v4/user/register",
                    description: "Register a new user account",
                    parameters: [
                        {
                            name: "email",
                            type: "string",
                            required: true,
                            description: "User's email address"
                        },
                        {
                            name: "password",
                            type: "string",
                            required: true,
                            description: "User's password"
                        },
                        {
                            name: "name",
                            type: "string",
                            required: true,
                            description: "User's display name"
                        }
                    ],
                    responses: {
                        "201": {
                            description: "Successfully registered"
                        }
                    }
                },
                {
                    id: "forgot-password",
                    name: "Forgot Password",
                    method: "POST",
                    path: "/v4/user/forgotpassword",
                    description: "Request password reset",
                    parameters: [
                        {
                            name: "email",
                            type: "string",
                            required: true,
                            description: "User's email address"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Password reset email sent"
                        }
                    }
                },
                {
                    id: "edit-password",
                    name: "Edit Password",
                    method: "POST",
                    path: "/v4/user/password",
                    description: "Change user password",
                    parameters: [
                        {
                            name: "currentPassword",
                            type: "string",
                            required: true,
                            description: "Current password"
                        },
                        {
                            name: "newPassword",
                            type: "string",
                            required: true,
                            description: "New password"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Password changed successfully"
                        }
                    }
                },
                {
                    id: "delete-account",
                    name: "Delete Account",
                    method: "DELETE",
                    path: "/v4/user",
                    description: "Delete user account",
                    responses: {
                        "200": {
                            description: "Account deleted successfully"
                        }
                    }
                },
                {
                    id: "get-settings",
                    name: "Get Account Settings",
                    method: "GET",
                    path: "/v4/user/settings",
                    description: "Retrieve user account settings",
                    responses: {
                        "200": {
                            description: "Account settings retrieved"
                        }
                    }
                },
                {
                    id: "update-settings",
                    name: "Update Account Settings",
                    method: "PUT",
                    path: "/v4/user/settings",
                    description: "Update user account settings",
                    parameters: [
                        {
                            name: "settings",
                            type: "object",
                            required: true,
                            description: "Updated settings object"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Settings updated successfully"
                        }
                    }
                },
                {
                    id: "set-profile-image",
                    name: "Set Profile Image",
                    method: "POST",
                    path: "/v4/user/settings/image",
                    description: "Upload a new profile image",
                    parameters: [
                        {
                            name: "image",
                            type: "file",
                            required: true,
                            description: "Profile image file"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Image uploaded successfully"
                        }
                    }
                }
            ]
        },
        {
            id: "league-management",
            name: "League Management",
            description: "Endpoints for managing leagues",
            endpoints: [
                {
                    id: "create-league",
                    name: "Create League",
                    method: "POST",
                    path: "/v4/leagues",
                    description: "Create a new league",
                    parameters: [
                        {
                            name: "name",
                            type: "string",
                            required: true,
                            description: "League name"
                        },
                        {
                            name: "type",
                            type: "string",
                            required: true,
                            description: "League type (public/private)"
                        },
                        {
                            name: "maxMembers",
                            type: "number",
                            required: true,
                            description: "Maximum number of members"
                        }
                    ],
                    responses: {
                        "201": {
                            description: "League created successfully"
                        }
                    }
                },
                {
                    id: "join-league",
                    name: "Join League",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/join",
                    description: "Join a public league",
                    responses: {
                        "200": {
                            description: "Successfully joined league"
                        }
                    }
                },
                {
                    id: "join-private-league",
                    name: "Join Private League",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/join/{code}",
                    description: "Join a private league using invite code",
                    parameters: [
                        {
                            name: "code",
                            type: "string",
                            required: true,
                            description: "League invite code"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successfully joined private league"
                        }
                    }
                },
                {
                    id: "league-preview",
                    name: "Get League Preview",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/overview",
                    description: "Get preview data for a league",
                    responses: {
                        "200": {
                            description: "League preview data retrieved"
                        }
                    }
                },
                {
                    id: "get-user-league-info",
                    name: "Get User League Info",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/me",
                    description: "Get current user's league information",
                    responses: {
                        "200": {
                            description: "User league info retrieved"
                        }
                    }
                },
                {
                    id: "get-league-activities",
                    name: "Get League Activities Feed",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/activitiesFeed",
                    description: "Get league activity feed",
                    responses: {
                        "200": {
                            description: "League activities retrieved"
                        }
                    }
                },
                {
                    id: "validate-invitation",
                    name: "Validate Invitation Code",
                    method: "GET",
                    path: "/v4/invitations/{code}/validate",
                    description: "Validate a league invitation code",
                    responses: {
                        "200": {
                            description: "Invitation code validated",
                            example: {
                                valid: true,
                                league: {
                                    id: "league123",
                                    name: "League Name",
                                    memberCount: 5,
                                    maxMembers: 8
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "market-players",
            name: "Market & Players",
            description: "Endpoints for market and player management",
            endpoints: [
                {
                    id: "get-squad",
                    name: "Get Squad",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/squad",
                    description: "Get current squad information",
                    responses: {
                        "200": {
                            description: "Squad information retrieved",
                            example: {
                                players: [
                                    {
                                        id: "player123",
                                        name: "Player Name",
                                        position: "FW",
                                        team: "Team Name",
                                        number: 9,
                                        status: "active",
                                        stats: {
                                            points: 85,
                                            marketValue: 15000000,
                                            averagePoints: 8.5
                                        }
                                    }
                                ],
                                formation: "4-4-2",
                                totalValue: 150000000
                            }
                        }
                    }
                },
                {
                    id: "market-players",
                    name: "Get Market Players",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/market/players",
                    description: "Get all available players in the market",
                    responses: {
                        "200": {
                            description: "Market players retrieved",
                            example: {
                                players: [
                                    {
                                        id: "player123",
                                        name: "Available Player",
                                        position: "MF",
                                        team: "Team Name",
                                        price: 12000000,
                                        expiry: "2024-01-01T00:00:00Z",
                                        stats: {
                                            form: 8.5,
                                            totalPoints: 123,
                                            gamesPlayed: 15
                                        }
                                    }
                                ],
                                meta: {
                                    total: 50,
                                    available: 25
                                }
                            }
                        }
                    }
                },
                {
                    id: "get-player-details",
                    name: "Get Player Details",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/players/{playerId}",
                    description: "Get detailed player information",
                    responses: {
                        "200": {
                            description: "Player details retrieved",
                            example: {
                                id: "player123",
                                name: "Player Name",
                                team: "Team Name",
                                position: "FW",
                                number: 9,
                                status: "active",
                                marketValue: 15000000,
                                stats: {
                                    points: 85,
                                    form: 8.5,
                                    gamesPlayed: 15,
                                    goals: 10,
                                    assists: 5
                                }
                            }
                        }
                    }
                },
                {
                    id: "get-player-performance",
                    name: "Get Player Performance",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/players/{playerId}/performance",
                    description: "Get player performance statistics",
                    responses: {
                        "200": {
                            description: "Player performance retrieved",
                            example: {
                                overall: {
                                    points: 85,
                                    averagePoints: 8.5,
                                    form: 9.0
                                },
                                matches: [
                                    {
                                        matchday: 15,
                                        points: 12,
                                        events: ["GOAL", "ASSIST"]
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "buy-player",
                    name: "Buy Player",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/buy",
                    description: "Purchase a player from the market",
                    parameters: [
                        {
                            name: "price",
                            type: "number",
                            required: true,
                            description: "Purchase price"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Player purchased successfully",
                            example: {
                                success: true,
                                transaction: {
                                    playerId: "player123",
                                    price: 15000000,
                                    timestamp: "2024-01-01T12:00:00Z"
                                },
                                newBalance: 35000000
                            }
                        }
                    }
                },
                {
                    id: "sell-player",
                    name: "Sell Player",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/sell",
                    description: "Sell a player to the market",
                    parameters: [
                        {
                            name: "price",
                            type: "number",
                            required: true,
                            description: "Asking price"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Player listed for sale",
                            example: {
                                success: true,
                                listing: {
                                    playerId: "player123",
                                    price: 15000000,
                                    expiry: "2024-01-02T12:00:00Z"
                                }
                            }
                        }
                    }
                },
                {
                    id: "place-bid",
                    name: "Place Bid",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/bid",
                    description: "Place a bid on a player",
                    parameters: [
                        {
                            name: "amount",
                            type: "number",
                            required: true,
                            description: "Bid amount"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Bid placed successfully",
                            example: {
                                success: true,
                                bid: {
                                    playerId: "player123",
                                    amount: 15000000,
                                    expires: "2024-01-01T14:00:00Z"
                                }
                            }
                        }
                    }
                },
                {
                    id: "accept-kickbase-offer",
                    name: "Accept Kickbase Offer",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/sell",
                    description: "Accept an offer from Kickbase for a player"
                },
                {
                    id: "accept-manager-offer",
                    name: "Accept Manager Offer",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}/accept",
                    description: "Accept an offer from another manager"
                },
                {
                    id: "decline-manager-offer",
                    name: "Decline Manager Offer",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}/decline",
                    description: "Decline an offer from another manager"
                },
                {
                    id: "get-my-eleven",
                    name: "Get My Eleven",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/teamcenter/myeleven",
                    description: "Get current user's starting eleven"
                },
                {
                    id: "get-my-players-lineup",
                    name: "Get My Players Lineup",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/lineup",
                    description: "Get current user's lineup"
                },
                {
                    id: "get-player-market-value",
                    name: "Get Player Market Value",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/players/{playerId}/marketValue/{timeframe}",
                    description: "Get player's market value history"
                },
                {
                    id: "get-player-transfer-history",
                    name: "Get Player Transfer History",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/players/{playerId}/transferHistory",
                    description: "Get player's transfer history"
                },
                {
                    id: "get-player-transfers",
                    name: "Get Player Transfers",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/players/{playerId}/transfers",
                    description: "Get player's transfers"
                },
                {
                    id: "get-players-on-transfer",
                    name: "Get Players On Transfer",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/market",
                    description: "Get all players currently on transfer market"
                },
                {
                    id: "place-offer",
                    name: "Place An Offer",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/offers",
                    description: "Place an offer for a player"
                },
                {
                    id: "remove-from-market",
                    name: "Remove Player From Market",
                    method: "DELETE",
                    path: "/v4/leagues/{leagueId}/market/{playerId}",
                    description: "Remove a player from the transfer market"
                },
                {
                    id: "save-lineup",
                    name: "Save Lineup",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/lineup",
                    description: "Save current lineup"
                },
                {
                    id: "set-transfer-price",
                    name: "Set Player Transfer Price",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/market",
                    description: "Set transfer price for a player"
                },
                {
                    id: "withdraw-offer",
                    name: "Withdraw Offer",
                    method: "DELETE",
                    path: "/v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}",
                    description: "Withdraw an existing offer"
                }
            ]
        },
        {
            id: "competition",
            name: "Competition",
            description: "Endpoints for competition data",
            endpoints: [
                {
                    id: "competition-data",
                    name: "Get Competition Data",
                    method: "GET",
                    path: "/v4/competition/{competitionId}",
                    description: "Get competition information",
                    responses: {
                        "200": {
                            description: "Competition data retrieved",
                            example: {
                                id: "comp123",
                                name: "Bundesliga",
                                season: "2023/24",
                                currentMatchday: 15,
                                totalMatchdays: 34,
                                teams: [
                                    {
                                        id: "team123",
                                        name: "Team Name",
                                        shortName: "TN",
                                        position: 1,
                                        points: 35
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "match-day",
                    name: "Get Match Day Data",
                    method: "GET",
                    path: "/v4/competition/{competitionId}/matchday/{matchDayId}",
                    description: "Get match day information",
                    responses: {
                        "200": {
                            description: "Match day data retrieved",
                            example: {
                                matchday: 15,
                                matches: [
                                    {
                                        id: "match123",
                                        homeTeam: {
                                            id: "team1",
                                            name: "Home Team",
                                            score: 2
                                        },
                                        awayTeam: {
                                            id: "team2",
                                            name: "Away Team",
                                            score: 1
                                        },
                                        status: "FINISHED",
                                        date: "2024-01-01T15:30:00Z"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "live-match",
                    name: "Get Live Match Data",
                    method: "GET",
                    path: "/v4/matches/{matchId}/live",
                    description: "Get real-time match data",
                    responses: {
                        "200": {
                            description: "Live match data retrieved",
                            example: {
                                matchId: "match123",
                                status: "LIVE",
                                minute: 65,
                                score: {
                                    home: 2,
                                    away: 1
                                },
                                events: [
                                    {
                                        type: "GOAL",
                                        minute: 23,
                                        playerId: "player123",
                                        points: 4
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "chat",
            name: "Chat",
            description: "Endpoints for chat functionality",
            endpoints: [
                {
                    id: "chat-leagues",
                    name: "Fetch Chat Leagues",
                    method: "GET",
                    path: "/v4/chat/leagueselection",
                    description: "Get all available chat leagues",
                    responses: {
                        "200": {
                            description: "Chat leagues retrieved",
                            example: {
                                leagues: [
                                    {
                                        id: "league123",
                                        name: "League Chat",
                                        unreadCount: 5,
                                        lastMessage: {
                                            text: "Hello everyone!",
                                            timestamp: "2024-01-01T12:00:00Z",
                                            sender: "User123"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "refresh-token",
                    name: "Refresh Chat Token",
                    method: "GET",
                    path: "/v4/chat/refreshtoken",
                    description: "Refresh the chat authentication token",
                    responses: {
                        "200": {
                            description: "Chat token refreshed",
                            example: {
                                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                                expiresIn: 3600
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "utility",
            name: "Utility",
            description: "Utility endpoints",
            endpoints: [
                {
                    id: "app-config",
                    name: "Get App Configuration",
                    method: "GET",
                    path: "/v4/config",
                    description: "Get application configuration",
                    responses: {
                        "200": {
                            description: "App configuration retrieved",
                            example: {
                                version: "12.0.0",
                                features: {
                                    chat: true,
                                    challenges: true
                                },
                                maintenance: {
                                    scheduled: false
                                },
                                urls: {
                                    terms: "https://kickbase.com/terms",
                                    privacy: "https://kickbase.com/privacy"
                                }
                            }
                        }
                    }
                },
                {
                    id: "daily-bonus",
                    name: "Collect Daily Bonus",
                    method: "GET",
                    path: "/v4/bonus/collect",
                    description: "Collect daily bonus rewards",
                    responses: {
                        "200": {
                            description: "Daily bonus collected",
                            example: {
                                amount: 50000,
                                currency: "coins",
                                nextBonus: "2024-01-02T00:00:00Z",
                                streak: 5
                            }
                        }
                    }
                },
                {
                    id: "live-event-types",
                    name: "Get Live Event Types",
                    method: "GET",
                    path: "/v4/live/eventtypes",
                    description: "Get all possible live event types",
                    responses: {
                        "200": {
                            description: "Live event types retrieved",
                            example: {
                                events: [
                                    {
                                        id: "GOAL",
                                        name: "Goal",
                                        points: 4
                                    },
                                    {
                                        id: "ASSIST",
                                        name: "Assist",
                                        points: 2
                                    },
                                    {
                                        id: "YELLOW_CARD",
                                        name: "Yellow Card",
                                        points: -1
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "support-mail",
                    name: "Get Support Mail",
                    method: "GET",
                    path: "/v4/support/contactinfo",
                    description: "Get support contact information",
                    responses: {
                        "200": {
                            description: "Support contact info retrieved",
                            example: {
                                email: "support@kickbase.com",
                                subject: "Support Request",
                                additionalInfo: {
                                    version: "12.0.0",
                                    platform: "iOS"
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "challenge",
            name: "Challenge",
            description: "Endpoints for challenge management",
            endpoints: [
                {
                    id: "challenge-overview",
                    name: "Get Challenge Overview",
                    method: "GET",
                    path: "/v4/challenges/overview",
                    description: "Get overview of available challenges",
                    responses: {
                        "200": {
                            description: "Challenge overview retrieved",
                            example: {
                                active: [
                                    {
                                        id: "challenge123",
                                        name: "Weekend Challenge",
                                        type: "WEEKEND",
                                        startDate: "2024-01-01T00:00:00Z",
                                        endDate: "2024-01-03T00:00:00Z",
                                        prizes: [
                                            {
                                                rank: 1,
                                                amount: 100000
                                            }
                                        ]
                                    }
                                ],
                                upcoming: []
                            }
                        }
                    }
                },
                {
                    id: "join-challenge",
                    name: "Join Challenge",
                    method: "POST",
                    path: "/v4/challenges/{challengeId}/join",
                    description: "Join a challenge",
                    responses: {
                        "200": {
                            description: "Successfully joined challenge",
                            example: {
                                success: true,
                                challenge: {
                                    id: "challenge123",
                                    status: "JOINED",
                                    position: 0
                                }
                            }
                        }
                    }
                },
                {
                    id: "challenge-profile",
                    name: "Get Challenge Profile",
                    method: "GET",
                    path: "/v4/challenges/{challengeId}/profile",
                    description: "Get challenge profile information",
                    responses: {
                        "200": {
                            description: "Challenge profile retrieved",
                            example: {
                                id: "challenge123",
                                name: "Weekend Challenge",
                                status: "ACTIVE",
                                ranking: {
                                    position: 5,
                                    points: 150
                                }
                            }
                        }
                    }
                },
                {
                    id: "challenge-lineup",
                    name: "Get Challenge Lineup",
                    method: "GET",
                    path: "/v4/challenges/{challengeId}/lineup",
                    description: "Get challenge lineup",
                    responses: {
                        "200": {
                            description: "Challenge lineup retrieved",
                            example: {
                                formation: "4-4-2",
                                players: [
                                    {
                                        position: "GK",
                                        playerId: "player123",
                                        name: "Goalkeeper Name"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "update-challenge-lineup",
                    name: "Update Challenge Lineup",
                    method: "PUT",
                    path: "/v4/challenges/{challengeId}/lineup",
                    description: "Update challenge lineup",
                    parameters: [
                        {
                            name: "lineup",
                            type: "object",
                            required: true,
                            description: "New lineup configuration"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Lineup updated successfully",
                            example: {
                                success: true,
                                lineup: {
                                    formation: "4-4-2",
                                    players: [
                                        {
                                            position: "GK",
                                            playerId: "player123"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                {
                    id: "challenge-live-pitch",
                    name: "Get Challenge Live Pitch",
                    method: "GET",
                    path: "/v4/challenges/{challengeId}/lineup/livepitch",
                    description: "Get live pitch information",
                    responses: {
                        "200": {
                            description: "Live pitch data retrieved",
                            example: {
                                players: [
                                    {
                                        playerId: "player123",
                                        points: 8,
                                        events: ["GOAL"]
                                    }
                                ],
                                totalPoints: 45
                            }
                        }
                    }
                },
                {
                    id: "reset-challenge-lineup",
                    name: "Reset Challenge Lineup",
                    method: "POST",
                    path: "/v4/challenges/{challengeId}/lineup/clear",
                    description: "Reset challenge lineup",
                    responses: {
                        "200": {
                            description: "Lineup reset successfully",
                            example: {
                                success: true
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "admin",
            name: "Admin",
            description: "Administrative endpoints for league management",
            endpoints: [
                {
                    id: "get-league-settings",
                    name: "Get League Settings",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/settings",
                    description: "Get league settings",
                    responses: {
                        "200": {
                            description: "League settings retrieved",
                            example: {
                                name: "League Name",
                                type: "private",
                                maxMembers: 8,
                                settings: {
                                    transferMarket: true,
                                    challenges: true
                                }
                            }
                        }
                    }
                },
                {
                    id: "save-league-settings",
                    name: "Save League Settings",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/settings",
                    description: "Save league settings",
                    parameters: [
                        {
                            name: "settings",
                            type: "object",
                            required: true,
                            description: "Updated league settings"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Settings saved successfully",
                            example: {
                                success: true
                            }
                        }
                    }
                },
                {
                    id: "get-managers",
                    name: "Get Managers",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/settings/managers",
                    description: "Get league managers",
                    responses: {
                        "200": {
                            description: "Managers retrieved",
                            example: {
                                managers: [
                                    {
                                        id: "user123",
                                        name: "Manager Name",
                                        role: "ADMIN"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "reset-league",
                    name: "Reset League",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/reset",
                    description: "Reset entire league",
                    responses: {
                        "200": {
                            description: "League reset successfully",
                            example: {
                                success: true
                            }
                        }
                    }
                },
                {
                    id: "reset-team",
                    name: "Reset Team",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/resetteams",
                    description: "Reset team in league",
                    responses: {
                        "200": {
                            description: "Team reset successfully",
                            example: {
                                success: true
                            }
                        }
                    }
                },
                {
                    id: "unlock-matchday",
                    name: "Unlock Matchday Points",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/users/{userId}/unlock",
                    description: "Unlock matchday points for user",
                    responses: {
                        "200": {
                            description: "Points unlocked successfully",
                            example: {
                                success: true,
                                points: 85
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "news",
            name: "News",
            description: "Endpoints for news and content",
            endpoints: [
                {
                    id: "base-overview",
                    name: "Get Base Overview",
                    method: "GET",
                    path: "/v4/base/overview",
                    description: "Get news overview",
                    responses: {
                        "200": {
                            description: "News overview retrieved",
                            example: {
                                sections: [
                                    {
                                        id: "section123",
                                        name: "Latest News",
                                        items: [
                                            {
                                                id: "news123",
                                                title: "News Title",
                                                preview: "News preview text"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "section-items",
                    name: "Get Base Section Items",
                    method: "GET",
                    path: "/v4/base/sections/{sectionId}/items",
                    description: "Get items in a news section",
                    responses: {
                        "200": {
                            description: "Section items retrieved",
                            example: {
                                items: [
                                    {
                                        id: "news123",
                                        title: "News Title",
                                        content: "Full news content",
                                        date: "2024-01-01T12:00:00Z"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "news-detail",
                    name: "Get News Detail",
                    method: "GET",
                    path: "/v4/base/items/{itemId}",
                    description: "Get detailed news item",
                    responses: {
                        "200": {
                            description: "News detail retrieved",
                            example: {
                                id: "news123",
                                title: "News Title",
                                content: "Full news content",
                                author: "Author Name",
                                date: "2024-01-01T12:00:00Z",
                                images: [
                                    {
                                        url: "https://example.com/image.jpg",
                                        caption: "Image caption"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    id: "track-news-click",
                    name: "Track News Item Clicked",
                    method: "POST",
                    path: "/v4/base/items/{itemId}/click",
                    description: "Track when a news item is clicked",
                    responses: {
                        "200": {
                            description: "Click tracked successfully",
                            example: {
                                success: true
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "scout",
            name: "Scout",
            description: "Endpoints for player scouting",
            endpoints: [
                {
                    id: "add-to-scout",
                    name: "Add Player To Scout List",
                    method: "POST",
                    path: "/v4/leagues/{leagueId}/scoutedplayers/{playerId}",
                    description: "Add a player to scout list"
                },
                {
                    id: "clear-scout-list",
                    name: "Clear Scout List",
                    method: "DELETE",
                    path: "/v4/leagues/{leagueId}/scoutedplayers",
                    description: "Clear entire scout list"
                },
                {
                    id: "get-scout-list",
                    name: "Get Scout Players List",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/scoutedplayers",
                    description: "Get all scouted players"
                },
                {
                    id: "remove-from-scout",
                    name: "Remove From Scout List",
                    method: "DELETE",
                    path: "/v4/leagues/{leagueId}/scoutedplayers/{playerId}",
                    description: "Remove a player from scout list"
                }
            ]
        },
        {
            id: "manager-profile",
            name: "Manager Profile",
            description: "Endpoints for manager profiles",
            endpoints: [
                {
                    id: "get-manager-performance",
                    name: "Get Manager Performance",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/managers/{managerId}/performance",
                    description: "Get manager's performance statistics"
                },
                {
                    id: "get-manager-dashboard",
                    name: "Get Manager Profile Dashboard",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/managers/{managerId}/dashboard",
                    description: "Get manager's dashboard information"
                },
                {
                    id: "get-manager-transfers",
                    name: "Get Manager Profile Transfers",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/managers/{managerId}/transfer",
                    description: "Get manager's transfer history"
                },
                {
                    id: "get-manager-squad",
                    name: "Get Manager Squad Details",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/managers/{managerId}/squad",
                    description: "Get manager's squad details"
                }
            ]
        },
        {
            id: "team",
            name: "Team",
            description: "Endpoints for team management",
            endpoints: [
                {
                    id: "get-team-center",
                    name: "Get Team Center Of Manager",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/users/{userId}/teamcenter",
                    description: "Get team center information for a manager"
                },
                {
                    id: "get-team-profile",
                    name: "Get Team Profile Data",
                    method: "GET",
                    path: "/v4/leagues/{leagueId}/teams/{teamId}/teamprofile",
                    description: "Get team profile information"
                }
            ]
        },
        {
            id: "liga-insider",
            name: "Liga Insider",
            description: "Endpoints for Liga Insider integration",
            endpoints: [
                {
                    id: "get-liga-insider",
                    name: "Get Liga Insider Data",
                    method: "GET",
                    path: "/v4/sso/{target}",
                    description: "Get Liga Insider integration data"
                }
            ]
        }
    ]
}; 