import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home } from "../screens/Home"
import { NewMarkers } from "../screens/NewMarkers"
import { PolygonCreate } from "../screens/PolygonCreate"

export function Drawer() {
  const { Navigator, Screen } = createDrawerNavigator()

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="NewMarkers" component={NewMarkers} />
      <Screen name="PolygonCreate" component={PolygonCreate} />
    </Navigator>
  )
}