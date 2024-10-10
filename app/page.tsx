import { BaseLayout } from "@/components/layouts/baseLayout/baseLayout";
import { HomeModules } from "@/modules/homeModules/HomeModules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealls Article Portal",
  description: "Dealls Article Portal Desc",
};

export default function Home() {
  return (
    <div className="w-full">
      <BaseLayout>
        <HomeModules />
      </BaseLayout>
    </div>
  );
}
