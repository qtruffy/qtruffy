import { JsonLd } from '@/components/json-ld';
import { profilePageJsonLd } from '@/utils/structured-data';

export default function Home() {
  return (
    <main>
      <JsonLd data={profilePageJsonLd} />
      Quentin Truffy
    </main>
  );
}
