import StoreProvider from "./StoreProvider";
import Dungeon from "./dungeon";

export const metadata = {
  title: 'Taxomageia Dungeon',
  description: 'Taxomageia Dungeon to create and edit Taxomageia creatures and monsters',
}

export default function Page() {
  return (
    <StoreProvider>
      <Dungeon />
    </StoreProvider>
  )
}
