import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import LenisProvider from "@/components/LenisProvider";
import AudioPlayer from "@/components/AudioPlayer";
import MessageDock from "@/components/MessageDock";

export const metadata = {
  title: "Supreme Studios | Prophetic Prayer, Counseling & Deliverance",
  description:
    "Supreme Studios — prophetic prayer, counseling and deliverance ministry on Ashaiman Klagon Road, Tema/Ashaiman, Ghana. Listen live 24/7 and book a counseling session.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <LenisProvider>
            {children}
            <MessageDock />
            <AudioPlayer />
          </LenisProvider>
        </AppProvider>
      </body>
    </html>
  );
}
