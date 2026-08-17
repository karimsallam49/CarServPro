export type CardConfig = {
  id: number;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  icon: any;
  badge: { text: string; variant: string; textColor?: string };
  content: string;
  type: "simple" | "image";
  img?: string;
  blur?: boolean;
  delay: number;
};

export type Props = {
  targetRef: React.RefObject<HTMLElement>;
};
