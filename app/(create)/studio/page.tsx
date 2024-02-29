import StoreProvider from "./StoreProvider";
import Studio from "./studio";

export default function Page() {
  return (
    <StoreProvider>
      <Studio />
    </StoreProvider>
  )
}
