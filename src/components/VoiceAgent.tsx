import { useConversation } from "@elevenlabs/react";
import { Mic, PhoneOff, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const AGENT_ID = "agent_7101kyyj9stjefjan2e9m0tzvsh6";

export function VoiceAgent() {
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onError: (error) => {
      console.error("Voice agent error:", error);
      toast.error("Aria couldn't connect. Please try again.");
    },
  });

  const connected = conversation.status === "connected";

  const start = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      toast.error("Microphone access is needed to talk with Aria.");
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  return (
    <div className="rounded-3xl border bg-card p-8 text-center shadow-card">
      <div className="mx-auto flex flex-col items-center gap-5">
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-hero text-primary-foreground ${
            connected ? "animate-pulse-ring" : ""
          }`}
        >
          <Mic className="h-10 w-10" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Talk to Aria</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Aria is our AI receptionist. Ask about services, pricing, opening hours,
            or book an appointment — by voice, instantly.
          </p>
        </div>

        <p className="text-sm font-medium text-primary">
          {connected
            ? conversation.isSpeaking
              ? "Aria is speaking…"
              : "Aria is listening…"
            : isConnecting
              ? "Connecting…"
              : "Ready when you are"}
        </p>

        {connected ? (
          <Button size="lg" variant="outline" onClick={() => conversation.endSession()}>
            <PhoneOff className="mr-2 h-4 w-4" /> End call
          </Button>
        ) : (
          <Button size="lg" onClick={start} disabled={isConnecting}>
            {isConnecting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Mic className="mr-2 h-4 w-4" />
            )}
            Start voice call
          </Button>
        )}
      </div>
    </div>
  );
}
