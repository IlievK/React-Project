import styles from '../catalog/catalog.module.css'

export default function Catalog(){
    return(
        <>
        
        <section id="viewCatalog" className="background-img">
  {/*If there are one or more electronics*/}
  <div className="added-electronics">
    <a href="#" className="added-electronics-in-market">
      <img src="./image/laptop.webp" className="picture-added-electronics" />
      <h3>Laptop HP EliteBook 820 G4</h3>
      <span>Price: $153</span>
    </a>
    <a href="#" className="added-electronics-in-market">
      <img src="./image/tablet.webp" className="picture-added-electronics" />
      <h3>Tablet Apple iPad Air 16GB</h3>
      <span>Price: $92</span>
    </a>
    <a href="#" className="added-electronics-in-market">
      <img
        src="./image/smartphone.webp"
        className="picture-added-electronics"
      />
      <h3>Samsung Galaxy S21 5G 128GB</h3>
      <span>Price: $347</span>
    </a>
  </div>
  {/*If there are no electronics in catalog yet*/}
  {/* <div class="guest">
          There are no electronics found...
      </div> */}
</section>
        </>
    )
}