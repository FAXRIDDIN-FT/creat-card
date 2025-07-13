import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import RecipesCard from '../../components/RecipesCard/RecipesCard'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import CardView from '../../components/CardView/CardView'

const Wishlist = () => {
  const recipes = useSelector((state: RootState) => state.recipe.value  )
  const product = useSelector((state: RootState) => state.product.value  )
  const card = useSelector((state: RootState) => state.card.value  )
  return (
    <div>
      {
           <RecipesCard data={recipes}/>
      }
      <div>
        {
          <ProductsCard data={product}/>
        }
      </div>
      <div>
        {

        <CardView data={card} />
        }
      </div>
    </div>
  )
}

export default Wishlist