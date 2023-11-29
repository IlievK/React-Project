export default function Edit (){
    return(
        <section id="editPage">
  <form id="editForm" action="#" method="">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name=""
      defaultValue="Laptop HP EliteBook 820 G4"
    />
    <label htmlFor="type">Type:</label>
    <input type="text" id="type" name="" defaultValue="Laptop" />
    <label htmlFor="production">Year of Production:</label>
    <input type="number" id="production" name="" defaultValue={2008} />
    <label htmlFor="exploitation">Years of Exploitation:</label>
    <input type="number" id="exploitation" name="" defaultValue={12} />
    <label htmlFor="damages">Damages:</label>
    <input
      type="text"
      id="damages"
      name=""
      defaultValue="The product has minimal signs of use, not affecting its functionality."
    />
    <label htmlFor="image">Image:</label>
    <input
      type="text"
      id="image"
      name=""
      defaultValue="https://hop.bg/img/productsimg/55801-55900/%D0%9B%D0%B0%D0%BF%D1%82%D0%BE%D0%BF-hp-elitebook-55852-1-1.webp"
    />
    <label htmlFor="price">Price:</label>
    <input type="number" id="price" name="" defaultValue={153} />
    <label htmlFor="description">Description:</label>
    <input
      type="text"
      id="description"
      name=""
      defaultValue="Intel Core i5-7200U (3M, 2.50 GHz, up to 3.10 GHz), 8GB DDR4, 256GB SSD, Intel HD Graphics 620, 12.5 inches (31.75 cm), 1366x768 HD"
    />
    <input type="submit" className="edit" defaultValue="Edit Offer" />
  </form>
</section>

    )
}