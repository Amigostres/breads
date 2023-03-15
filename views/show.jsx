const React = require(`react`)
const Default = require(`./layouts/Default`)

function show({bread}) {
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
            <a href="/breads">Go Home</a>
        </Default>
    )
}

module.exports = show