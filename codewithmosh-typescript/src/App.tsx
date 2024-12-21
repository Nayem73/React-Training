import { useState } from "react";
import Button from "./components/Button"
import Like from "./components/Like"
import Game from "./components/Game";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [isRed, setIsRed] = useState(true);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    }
  });
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ]
  })

  return (
    <>
      <Button buttonText="Submit" />
      <Like onClick={() => {
        console.log('Like button clicked');
        setIsRed(!isRed)
      }}
        isRed={isRed}
      />

      <Game onClick={() => {
        console.log('Game button clicked');
        setGame({ ...game, player: { ...game.player, name: 'Not John' } })
        console.log('Pizza toppings adding button is also clicked')
        setPizza({ ...pizza, toppings: [...pizza.toppings, 'new topping'] })
      }}
        game={game}
        pizza={pizza}
      />

      <Navbar totalItems={cart.items.length} />
      <ShoppingCart onClick={() => {
        console.log('Shopping cart button clicked');
        setCart({
          ...cart, items:
            cart.items.map(item =>
              (item.id === 1) ? { ...item, quantity: 500 } : item
            )
        })
      }}
        cart={cart}

        onChange={(e) => {
          setCart({ ...cart, items: [...cart.items, { id: 3, title: e.target.value, quantity: 1 }] })
        }}

      />

      <ExpandableText text="Dhaka (/ˈdɑːkə/ DAH-kə or /ˈdækə/ DAK-ə; Bengali: ঢাকা, romanized: Ḍhākā, pronounced [ˈɖʱaka] ⓘ), formerly known as Dacca,[20] is the capital and largest city of Bangladesh. It is the ninth-largest and seventh-most densely populated city in the world with a density of 23,234 people per square kilometer within a total area of approximately 300 square kilometers.[21] Dhaka is a megacity, and has a population of 10.2 million residents as of 2024, and a population of over 23.9 million residents in Dhaka Metropolitan Area.[22][14][23] It is widely considered to be the most densely populated built-up urban area in the world.[24][25] Dhaka is the most important cultural, economic, and scientific hub of Eastern South Asia, as well as a major Muslim-majority city. Dhaka ranks third in South Asia and 39th in the world in terms of GDP. Lying on the Ganges Delta, it is bounded by the Buriganga, Turag, Dhaleshwari and Shitalakshya rivers. Dhaka is also the largest Bengali-speaking city in the world.

The area of Dhaka has been inhabited since the first millennium. An early modern city developed from the 17th century as a provincial capital and commercial centre of the Mughal Empire. Dhaka was the capital of a proto-industrialized Mughal Bengal for 75 years (1608–39 and 1660–1704). It was the hub of the muslin trade in Bengal and one of the most prosperous cities in the world. The Mughal city was named Jahangirnagar (The City of Jahangir) in honour of the erstwhile ruling emperor Jahangir.[26][27][28] The city's wealthy Mughal elite included princes and the sons of Mughal emperors. The pre-colonial city's glory peaked in the 17th and 18th centuries, when it was home to merchants from across Eurasia. The Port of Dhaka was a major trading post for both riverine and seaborne trade. The Mughals decorated the city with well-laid gardens, tombs, mosques, palaces, and forts. The city was once called the Venice of the East.[29]

Under British rule, the city saw the introduction of electricity, railways, cinemas, Western-style universities and colleges and a modern water supply. It became an important administrative and educational centre in the British Raj, as the capital of Eastern Bengal and Assam province after 1905.[30] In 1947, after the end of British rule, the city became the administrative capital of East Pakistan. It was declared the legislative capital of Pakistan in 1962. In 1971, following the Liberation War, it became the capital of independent Bangladesh. In 2008, Dhaka celebrated 400 years as a municipal city.[31][32][33]

A gamma+ global city,[34] Dhaka is the centre of political, economic and cultural life in Bangladesh. It is the seat of the Government of Bangladesh, many Bangladeshi companies, and leading Bangladeshi educational, scientific, research, and cultural organizations. Since its establishment as a modern capital city, the population, area and social and economic diversity of Dhaka have grown tremendously. The city is now one of the most densely industrialized regions in the country. The city accounts for 35% of Bangladesh's economy.[35] The Dhaka Stock Exchange has over 750 listed companies. Dhaka hosts over 50 diplomatic missions; as well as the headquarters of BIMSTEC, CIRDAP, and the International Jute Study Group. Dhaka has a renowned culinary heritage. The city's culture is known for its rickshaws, Kacchi Biryani, art festivals, street food, and religious diversity. Dhaka's most prominent architectural landmark is the modernist Jatiyo Sangshad Bhaban; while it has a heritage of 2000 buildings from the Mughal and British periods.[36] The city is associated with two Nobel laureates. Dhaka's annual Bengali New Year parade, its Jamdani sari, and its rickshaw art have been recognized by UNESCO as the intangible cultural heritage of humanity.[37][38][39] The city has produced many writers and poets in several languages, especially in Bengali and English."
      />
    </>
  )
}

export default App
