import StoreProvider from "./StoreProvider";
import Studio from "./studio";

export const metadata = {
  title: 'Taxomageia Studio',
  description: 'Taxomageia Studio to create and edit Taxomageia models',
}

export default function Page() {
  return (
    <StoreProvider>
      <Studio />
    </StoreProvider>
  )
}
