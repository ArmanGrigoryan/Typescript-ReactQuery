import { useEffect, useCallback } from 'react';
import { getCategoriesData } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectCatState, setSelectedCategory } from '../../redux/reducers';
import { selectCategories } from '../../redux/reducers/categories';
import { getCatData } from './../../redux/actions/cat.actions';
import './style.scss';

export default function Navbar() {
    const categories = useAppSelector(selectCategories);
    const selectedCategory = useAppSelector(selectCatState).selectedCategory;
    const dispatch = useAppDispatch();

    const onMenuClick = useCallback((id: string) => {
        dispatch(setSelectedCategory(id));
        dispatch(getCatData({
            category_id: id
        }))
    }, [dispatch])

    useEffect(() => {
        const promise = dispatch(getCategoriesData());

        return () => {
            promise.abort()
        }
    }, [dispatch])

    return <div className='navbar-container'>
        {categories.map((each) => {
            return <div 
                key={each.id} 
                className="navbar-container__img" 
                onClick={() => onMenuClick(each.id)}>
                <button className={`${each.id===selectedCategory ? "active" : ""}`}>{each.name}</button>
            </div>
        })}
    </div>
}