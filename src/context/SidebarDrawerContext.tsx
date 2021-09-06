import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useEffect, useContext, ReactNode } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;
const SideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SideBarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const router = useRouter();
  const disclosure = useDisclosure();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSidbarDrawer = () => useContext(SideBarDrawerContext);
