import Link from 'next/link'
import CardItem from '../components/cards/CardItem'
import VendorItem from '../components/vendors/VendorItem'
import CardsList from '../components/cards/CardsList'


const vendors = [
  {
    id: 1,
    name: "Home Depot",
    image: "assets/img/vendor/home-depot.png",
    link: "/vendor/home-depot"
  },
  {
    id: 2,
    name: "Amazon",
    image: "assets/img/vendor/amazon.png",
    link: "/vendor/amazon"
  },
  {
    id: 3,
    name: "Telus",
    image: "assets/img/vendor/telus.png",
    link: "/vendor/telus"
  },
  {
    id: 4,
    name: "Boston Pizza",
    image: "assets/img/vendor/boston-pizza.png",
    link: "/vendor/boston-pizza"
  },
  {
    id: 5,

    name: "Netflix",
    image: "assets/img/vendor/netflix.png",
    link: "/vendor/netflix"
  },
  {
    id: 6,
    name: "Rogers",
    image: "assets/img/vendor/rogers.png",
    link: "/vendor/rogers"
  },

  {
    id: 7,
    name: "The Keg",
    image: "assets/img/vendor/the-keg.jpeg",
    link: "/vendor/the-keg"
  },

  {
    id: 8,
    name: "McDonalds",
    image: "assets/img/vendor/mcondalds.png",
    link: "/vendor/mcdonalds"
  },

  {
    id: 9,
    name: "Moxies",
    image: "assets/img/vendor/moxies.jpeg",
    link: "/vendor/moxies"
  },
  {
    id: 10,
    name: "Disney Plus",
    image: "assets/img/vendor/disney-plus.jpeg",
    link: "/vendor/disney-plus"
  }
]

const home = () => {

  return (
      <main>


        <section className="main-content">
          <h2>Vendors</h2>

        
          <div className="store-list grid grid-cols-4 gap-4">

{
  vendors.map((vendor) => (
    <Link href={vendor.link}>
    <VendorItem vendor={vendor} />
    </Link>
  ))  
}

          </div>

          <h2>Cards</h2>
          <CardsList />
          <div className="card-list grid grid-cols-3 gap-4">

          </div>

        </section>
  
      </main>

  )
}

export default home