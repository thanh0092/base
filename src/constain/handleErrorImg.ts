import noImg from "../../dist/image/image";

export default function handleErrorImg(e: any) {
    e.target.src = noImg.src;
}