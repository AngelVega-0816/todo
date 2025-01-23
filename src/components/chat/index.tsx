// import { useCallback, useEffect, useRef, useState } from "react";

// const useChat = (portalId) => {
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const [activeConversation, setActiveConversation] = useState(false);
//   const eventRef = useRef(null);

//   useEffect(() => {
//     console.log("hey");

//     // Add event listener.
//     window.hsConversationsOnReady = [
//       () => {
//         setHasLoaded(true);
//       },
//     ];

//     // Create script component.
//     let script = document.createElement("script");
//     script.src = `//js.hs-scripts.com/${portalId}.js`;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//       window.hsConversationsOnReady = [];
//     };
//   }, []);

//   // Subscripe to conversation events.
//   useEffect(() => {
//     eventRef.current = (payload) => {
//       setActiveConversation(payload.conversation.conversationId);
//     };

//     if (hasLoaded) {
//       window.HubSpotConversations.on("conversationStarted", eventRef.current);
//     }

//     return () => {
//       window.HubSpotConversations.off("conversationStarted", eventRef.current);
//     };
//   }, [hasLoaded]);

//   const openHandler = useCallback(() => {
//     if (hasLoaded) {
//       window.HubSpotConversations.widget.open();
//     }
//   }, [hasLoaded]);

//   const closeHandler = useCallback(() => {
//     if (hasLoaded) {
//       window.HubSpotConversations.widget.close();
//     }
//   }, [hasLoaded]);

//   return {
//     hasLoaded,
//     activeConversation,
//     openHandler,
//     closeHandler,
//   };
// };

// export default useChat;
