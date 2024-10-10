import { BaseLayout } from "@/components/layouts/baseLayout/baseLayout";
import { HomeModules } from "@/modules/homeModules/HomeModules";

export default function Home() {
  return (
    <div className="w-full">
      <BaseLayout>
        <HomeModules />
      </BaseLayout>
    </div>
  );
}
