import * as React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({
  children,
}: ContentLayoutProps) => {
  return (
    <main className="flex-1 flex justify-center items-center align-middle bg-linear-to-br from-black via-cool-gray-900 to-gray-800">
      <section className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-orange-400 text-4xl font-bold">
          Currency converter
        </h1>
        {children}
      </section>
    </main>
  );
};
