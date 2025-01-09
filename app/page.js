import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";

export default function Home() {
  return (
    <main>
      {/* Server components can include client components */}
      {/* Client components can't include Server components, unless they are passed as children */}
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      {/* <DataFetchingDemo /> */}
      <ServerActionsDemo />
    </main>
  );
}
