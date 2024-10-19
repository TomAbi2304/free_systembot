const settings = {
    token: "1234567890", // Bot Token
    guildid: "1234567890", // Guild ID
    activity: "FareService", // Activity Message
    activitytype: "PLAYING", // WATCHING, LISTENING, PLAYING, STREAMING
    staffId: "1234567890", // Staff Role IDEmergency Koenigsberg
    maxticketsopen: 3, // Max Tickets per User
}

const messages = {
    join: {
        enabled: true,
        channel: "1205404882396512278",
        title: "> `👋` Welcome",
        message: "Hello {usermention},\n- Welcome read our <#1204831503066865674> and have a lot of fun with us.\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n> **Member No.** `{servermembercount}`",
        color: "#7c15c5",
        image: {
            enabled: true,
            link: "{profilepicture}"
        },
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/aRknFR.gif"
        },
        author: {
            enabled: true,
            text: "Fare | Service",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        footer: {
            enabled: true,
            text: "{username}",
            img: "{profilepicture}"
        },
        timestamp: false,
    },
    boost: {
        enabled: true,
        channel: "1258437446828425230",
        title: "> `💜` ServerBoosts",
        message: "> Vielen Dank {userping} für das Boosten unseres Servers!\n\n> Server-Boosts: {ammountboosts}",
        color: "#7c15c5",
        image: {
            enabled: true,
            link: "{profilepicture}"
        },
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/aRknFR.gif"
        },
        author: {
            enabled: true,
            text: "Fare | Service",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        footer: {
            enabled: true,
            text: "{userping}",
            img: "{profilepicture}"
        },
        timestamp: true,
    },
    leave: {
        enabled: true,
        channel: "1261439293390323763",
        title: "> `👋` Verlassen",
        message: "> Auf Wiedersehen {usermention},\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n> **Mitglieder:** `{servermembercount}`",
        color: "#7c15c5",
        image: {
            enabled: true,
            link: "{profilepicture}"
        },
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/aRknFR.gif"
        },
        author: {
            enabled: true,
            text: "Fare | Service",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        footer: {
            enabled: true,
            text: "{username}",
            img: "{profilepicture}"
        },
        timestamp: false,
    },
}

const verify = {
    enabled: false,
    role: "944213125786402824",
    title: "Verifizieren",
    description: `Um gesamten Zugriff auf den Discord zu erhalten benötigen wir das akzeptieren des <#944213125836734583> das kannst du akzeptieren in dem du auf den verifizieren Button klickst!`,
    color: "#2fb0e2",
    image: {
        enabled: true,
        link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
    },
    banner: {
        enabled: false,
        link: "https://cdn-longterm.mee6.xyz/plugins/embeds/images/944213125786402816/b0f08636feb1288d808b9982dd40d07ccbb21b1f31441375168120097e70b375.png",
    },
    author: {
        enabled: true,
        text: "G-Cars",
        img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
    },
    footer: {
        enabled: true,
        text: "Copyright © 2023 G-Cars",
        img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
    },
    timestamp: false,
    button: {
        name: "Verifizieren",
        style: "PRIMARY",
        emoji: "✅",
        customId: "verify", // Do not change this
    }
}

const commands = [
    // To add a new command, copy the following code and paste it below the last command
    {
        name: "Paypal",
        description: "Sende dem User die PayPal Informationen",
        options: [
            {
                name: "ammount",
                description: "The ammount the user hast to pay",
                type: "INTEGER",
                required: false,
            }
        ],
        response: {
            title: "Test",
            description: "Betrag: {ammount}€\nEmail: paypal@g-dev.de\n\nBitte nach der Zahlung die Zahlungsbestätigung in das Ticket senden.",
            color: "#2fb0e2",
            image: {
                enabled: true,
                link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
            },
            banner: {
                enabled: false,
                link: "",
            },
            author: {
                enabled: false,
                text: "G-Cars",
                img: false            
            },
            footer: {
                enabled: true,
                text: "Copyright © 2023 G-Cars",
                img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
            },
            timestamp: false,
        }
    },
    {
        name: "Paysafe",
        description: "Show Payment Information",
        options: [
            {
                name: "ammount",
                description: "The ammount the user hast to pay",
                type: "INTEGER",
                required: false,
            }
        ],
        response: {
            title: "Test",
            description: "Betrag: {ammount}€\n\nBitte den Code via DM an <@986258038010834985> senden.",
            color: "#2fb0e2",
            image: {
                enabled: true,
                link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
            },
            banner: {
                enabled: false,
                link: "",
            },
            author: {
                enabled: false,
                text: "G-Cars",
                img: false            
            },
            footer: {
                enabled: true,
                text: "Copyright © 2023 G-Cars",
                img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
            },
            timestamp: false,
        }
    }
]

const ticketmenu = {
    title: "> `🎫` Ticket Support",
    description: "- Welcome to our ticket channel. If you have any questions or concerns!\n- `📌` **Available languages:**\n - `🌎` 🇩🇪/🇵🇱/🇺🇸/🇫🇷/🇪🇸",
    placeholder: "Choose category",
    color: "#7c15c5",
    image: {
        enabled: true,
        link: "https://tom.isfucking.pro/XR1vgh.gif"
    },
    banner: {
        enabled: true,
        link: "https://tom.isfucking.pro/aRknFR.gif"
    },
    author: {
        enabled: true,
        text: "Fare | Service",
        img: "https://tom.isfucking.pro/XR1vgh.gif"
    },
    footer: {
        enabled: true,
        text: "Fare | Service Staff",
        img: "https://tom.isfucking.pro/XR1vgh.gif"
    },
    timestamp: false,
}

const categorys = [
    // To add more categorys, just copy the code below and paste it above the last category.
    {
        name: "Support",
        description: "Do you need help? Create a ticket!",
        emoji: "🟡",
        categoryid: "1205404874695516221",
        ticket: {
            name: "🟡〡Support-{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: "1167903105405435916", // false to disable
            perms: "1167903105405435916",
            emebd: {
                title: "> `🟡` Support Ticket",
                description: "- `👋` Hey,{userping}\n - `❓` How can we help you? A moderator will be with you shortly.",
                color: "#7c15c5",
                image: {
                    enabled: false,
                    link: "",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/aRknFR.gif",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Fare | Service",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                footer: {
                    enabled: true,
                    text: "Fare | Service Staff",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                timestamp: false
            }
        }
    },
    {
        name: "Purchase",
        description: "Do you want to buy something? Create a ticket!",
        emoji: "🟢",
        categoryid: "1205404876209782825",
        ticket: {
            name: "🟢〡Purchase-{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: "1167903105405435916", // false to disable
            perms: "1167903105405435916",
            emebd: {
                title: "Purchase Ticket",
                description: "- `👋` Hey,{userping}\n - `❓` How can we help you? A moderator will be with you shortly.",
                color: "#7c15c5",
                image: {
                    enabled: false,
                    link: "",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/aRknFR.gif",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Fare | Service",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                footer: {
                    enabled: true,
                    text: "Fare | Service Staff",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                timestamp: false
            }
        }
    },
    {
        name: "Exchange",
        description: "You want something exchange? Create a ticket!",
        emoji: "🔴",
        categoryid: "1261609615238365184",
        ticket: {
            name: "🔴〡{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: "1167903105405435916", // false to disable
            perms: "1167903105405435916",
            emebd: {
                title: "Exchange Ticket",
                description: "- `👋` Hey,{userping}\n - `❓` How can we help you? A moderator will be with you shortly.",
                color: "#7c15c5",
                image: {
                    enabled: false,
                    link: "",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/aRknFR.gif",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Fare | Service",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                footer: {
                    enabled: true,
                    text: "Fare | Service Staff",
                    img: "https://tom.isfucking.pro/XR1vgh.gif"
                },
                timestamp: true
            }
        }
    }
]

const feedback = {
    enabled: true,
    channel: "1205404912897368095",
    embed: {
        title: "Feedback von {user}",
        description: "{feedback}",
        color: "#7c15c5",
        fields: [
            {
                name: "Feedback in Sternen",
                value: "{stars}",
                inline: true
            },
            {
                name: "User",
                value: "{userping}",
                inline: true
            }
        ],
        image: {
            enabled: true,
            link: "{profilepicture}"
        },
        author: {
            enabled: true,
            text: "Fare | Service",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        footer: {
            enabled: true,
            text: "Feedback von {username}",
            img: "{profilepicture}"
        },
        timestamp: true
    },
    feedbackdone: {
        title: "Feedback",
        description: "Thank you for your feedback!",
        color: "#7c15c5",
        banner: {
            enabled: false,
            link: "",
        },
        timestamp: true
    }
}

const logs = {
    ticketopen: {
        enabled: true,
        channel: "1261437957148119123",
            title: "Ticket wurde geöffnet",
            description: "> Ticket wurde von {username} geöffnet",
            color: "#7c15c5",
            fields: [
                {
                    name: "Ticket",
                    value: "{ticketname}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                },
                {
                    name: "Category",
                    value: "{category}",
                    inline: true
                }
            ],
            timestamp: true

    },
    ticketclose: {
        enabled: true,
        transscripts: true,
        sendTransscriptDM: true,
        channel: "1261438030120751184",
            title: "Ticket wurde geschlossen",
            description: "> Ticket wurde von {username} geschlossen",
            color: "#7c15c5",
            fields: [
                {
                    name: "Ticket",
                    value: "{ticketname}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                },
                {
                    name: "Category",
                    value: "{category}",
                    inline: true
                }
            ],
            timestamp: true
    },
    verify: {
        enabled: true,
        channel: "1077321245160378409",
            title: "User wurde verifiziert",
            description: "User {username} hat sich verifiziert",
            color: "#2fb0e2",
            timestamp: true
    },
    feedback: {
        enabled: true,
        channel: "1261438201743020106",
            title: "Feedback",
            description: "> User {username} hat ein Feedback geschrieben",
            color: "#7c15c5",
            fields: [
                {
                    name: "Feedback",
                    value: "{feedback}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                }
            ],
            timestamp: true
    }
}

module.exports = { settings, categorys, messages, commands, ticketmenu, feedback, logs, verify };
