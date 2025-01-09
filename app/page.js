import DataFetchingDemo from "@/components/DataFetchingDemo";

export default function Home() {
  return (
    <main>
      {/* Server components can include client components */}
      {/* Client components can't include Server components, unless they are passed as children */}
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      <DataFetchingDemo />
    </main>
  );
}
