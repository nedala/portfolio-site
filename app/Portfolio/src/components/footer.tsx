import { Button } from '@/components/button';
import Script from 'next/script';

export const Footer = () => {
  return (
    <footer className="relative text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '} Portfolio template adapted from {' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/Skolaczk" target="_blank"> Michał Skolak</a>
      </Button>
      {/* Include the static script block */}
      <Script type="module" strategy="afterInteractive">
        {`
          import Chatbot from "http://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
          Chatbot.init({
              chatflowid: "c074e9eb-4e54-4107-a298-78bb2dc8945e",
              apiHost: "http://192.168.27.10:33000",
              chatflowConfig: {
                  // topK: 2
              },
              observersConfig: {
                // User input has changed
                observeUserInput: (userInput) => {
                  console.log({ userInput });
                },
                // The bot message stack has changed
                observeMessages: (messages) => {
                  console.log({ messages });
                },
                // The bot loading signal changed
                observeLoading: (loading) => {
                  console.log({ loading });
                },
              },
              theme: {
                  button: {
                      backgroundColor: "#3B81F6",
                      right: 100,
                      bottom: 30,
                      size: 'medium', // small | medium | large | number
                      dragAndDrop: true,
                      iconColor: "white",
                      customIconSrc: "/chat.png",
                      autoWindowOpen: {
                          autoOpen: false, //parameter to control automatic window opening
                          openDelay: 2, // Optional parameter for delay time in seconds
                          autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                          },
                  },
                  tooltip: {
                      showTooltip: false,
                      tooltipMessage: 'Hi There 👋!',
                      tooltipBackgroundColor: 'black',
                      tooltipTextColor: 'white',
                      tooltipFontSize: 16,
                  },
                  chatWindow: {
                      showTitle: true,
                      title: "Seshu's Resume Bot",
                      titleAvatarSrc: '/chat.png',
                      showAgentMessages: true,
                      welcomeMessage: 'Ask me questions about Seshu&apos;s portfolio. You can also choose pre-primed questions from below. You can reset the chat by refreshing the page.',
                      errorMessage: 'This is a custom error message',
                      backgroundColor: "rgba(255, 255, 255, 0.95)", // Theme color with 90% transparency
                      backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                      height: 600,
                      width: 500,
                      fontSize: 14,
                      starterPrompts: ["Resume link for Seshu", "Seshu's Contact Details", "Seshu's Experience Summary", "Seshu's Accomplishments", "Education Summary", "Seshu's work at NTIS", "Seshu's work at Microsoft", "Seshu's experience at Intel Corp", "Seshu's work at ManTech", "Seshu's work at Amex GBT", "Seshu's work at HPE", "Seshu's contributions to Raytheon", "Seshu's work at Google Cloud", "What does GNYAN.ai do?", "What is 'Enya Media Works'?", "List of startups founded by Seshu"], // It overrides the starter prompts set by the chat flow passed
                      starterPromptFontSize: 14,
                      clearChatOnReload: true, // If set to true, the chat will be cleared when the page reloads.
                      botMessage: {
                          backgroundColor: "#f7f8ff",
                          textColor: "#303235",
                          showAvatar: true,
                          avatarSrc: "/answer.png",
                      },
                      userMessage: {
                          backgroundColor: "#3B81F6",
                          textColor: "#ffffff",
                          showAvatar: true,
                          avatarSrc: "/user.png",
                      },
                      textInput: {
                          placeholder: 'Type your question',
                          backgroundColor: '#ffffff',
                          textColor: '#303235',
                          sendButtonColor: '#3B81F6',
                          maxChars: 64,
                          maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                          autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                          sendMessageSound: false,
                          // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                          receiveMessageSound: false,
                          // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true. 
                      },
                      feedback: {
                          color: '#303235',
                      },
                      footer: {
                          textColor: '#303235',
                          text: 'AI Generated. Use with caution. ',
                          company: 'Ollama with neural-chat model',
                          companyLink: 'https://gnyan.ai',
                      }
                  }
              }
          });
        `}
      </Script>
    </footer>
  );
};
