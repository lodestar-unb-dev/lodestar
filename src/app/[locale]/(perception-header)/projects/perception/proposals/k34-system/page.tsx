import { useTranslations } from "next-intl";
import Image from "next/image";
import k34SystemImg from "../../assets/images/hero-bg.jpg";
import { K34SystemFullSvg } from "../../components/k34-system-full-svg";

export default function K34SystemPage() {
  const t = useTranslations("Projects.Perception.Proposals.k34-system");

  return (
    <main>
      <section className="relative flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-[384px]">
        <h1 className="text-2xl font-semibold uppercase md:text-4xl">
          {t("title")}
        </h1>
        <h2 className="text-lg">{t("description")}</h2>
        <Image
          className="absolute inset-0 -z-10 size-full object-cover"
          src={k34SystemImg}
          alt="k34 system"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50" />
      </section>
      <div className="bg-unbBlack-0">
        <section className="mx-auto max-w-[1200px] space-y-3 px-5 py-10 lg:py-20">
          <h3 className="text-xl font-semibold uppercase text-unbGreen-400 md:text-3xl">
            {t("overview.title")}
          </h3>

          <div className="space-y-4 text-justify text-unbBlack-100">
            <p>{t("overview.first-paragraph")}</p>

            <p>{t("overview.second-paragraph")}</p>
          </div>

          <K34SystemFullSvg />
        </section>
      </div>
      <section className="bg-unbBlack-100">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-14 px-5 py-5 lg:py-10">
          <h4 className="text-xl font-semibold uppercase md:text-3xl">
            {t("key-features.title")}
          </h4>

          <ul className="list-disc pl-5">
            <li className="marker:text-perceptionOrange-300">
              {t("key-features.list.first-item")}
            </li>
            <li className="marker:text-perceptionOrange-300">
              {t("key-features.list.second-item")}
            </li>
            <li className="marker:text-perceptionOrange-300">
              {t("key-features.list.third-item")}
            </li>
          </ul>

          <a
            href="mailto:lodestar@aerospace.unb.br"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-perceptionOrange-300 px-4 py-3 uppercase transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
          >
            {t("key-features.cta")}
          </a>
        </div>
      </section>
    </main>
  );
}
