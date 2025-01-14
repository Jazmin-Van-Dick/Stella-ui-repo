import { Camera } from "@/components/index";
import { router } from "expo-router";

export default function Section() {
    return (
        <Camera onConfirmPhoto={() => {
          router.push('/homeApp/addToWardrobe');
        }} />
    )
}