import { useRouter } from "next/navigation";

type NavigateFn = (path: string, isExternal?: boolean, newTab?: boolean) => void;

export const useNavigate = (): NavigateFn => {
  const router = useRouter();

  return (path: string, isExternal = false, newTab = true) => {
    if (isExternal) {
      window.open(path, newTab ? "_blank" : "_self");
    } else {
      router.push(path);
    }
  };
};
