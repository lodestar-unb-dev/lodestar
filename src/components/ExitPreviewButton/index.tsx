import { useRouter } from "next/router";
import Link from 'next/link';

import { Container } from "./styles";

export function ExitPreviewButton() {
  const { isPreview } = useRouter();

  if (isPreview) {
    return (
      <Container>
        <Link
          href="/api/exit-preview"
          passHref
        >
          <a>Exit Preview</a>
        </Link>
      </Container>
    )
  }

  return null;
}