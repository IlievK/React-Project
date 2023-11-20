export default function Create(){
    return(
        <section id="createPage">
  <form id="createForm" action="#" method="">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="" placeholder="Name..." />
    <label htmlFor="type">Type:</label>
    <input type="text" id="type" name="" placeholder="Type..." />
    <label htmlFor="production">Year of Production:</label>
    <input
      type="number"
      id="production"
      name=""
      placeholder="Year of Production..."
    />
    <label htmlFor="exploitation">Years of Exploitation:</label>
    <input
      type="number"
      id="exploitation"
      name=""
      placeholder="Year of Exploitation..."
    />
    <label htmlFor="damages">Damages:</label>
    <input type="text" id="damages" name="" placeholder="Damages..." />
    <label htmlFor="image">Image:</label>
    <input type="text" id="image" name="" placeholder="Image..." />
    <label htmlFor="price">Price:</label>
    <input type="number" id="price" name="" placeholder="Price..." />
    <label htmlFor="description">Description:</label>
    <input type="text" id="description" name="" placeholder="Description..." />
    <input type="submit" className="create" defaultValue="Create Offer" />
  </form>
</section>

    )
}