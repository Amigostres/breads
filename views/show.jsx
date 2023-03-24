const React = require(`react`)
const Default = require(`./layouts/Default`)

function show({bread, index}) {
    console.log(bread.name);
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>

            <p>
                {
                    bread.hasGluten
                    ? <span>Does </span>
                    : <span>Does not </span>
                }
                  have Gluten.
            </p>


            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy}</p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

            
                <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>

            <br />
            <br />
            <a href="/breads">Go Home</a>
        </Default>
    )
}

module.exports = show