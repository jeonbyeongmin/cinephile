import { Overlay } from '@/components/overlay';

interface ModalOverlayProps {
  className?: string;
}

export function ModalOverlay(props: ModalOverlayProps) {
  const { className } = props;

  return <Overlay className={className} />;
}
