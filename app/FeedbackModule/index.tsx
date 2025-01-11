import Camera from "@/components/Camera";
import { router } from "expo-router";


export default function Index() {
  return (
    <Camera 
      onConfirmPhoto={() => router.push('/FeedbackModule/review')}
    />
  );
}