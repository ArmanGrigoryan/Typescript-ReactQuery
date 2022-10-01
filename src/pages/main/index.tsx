import { useCallback, useEffect, useState } from 'react';
import { getCatData, loadMoreCatData } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectCatState } from '../../redux/reducers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.scss';

export default function Main() {
    const categoryId = useAppSelector(selectCatState).selectedCategory;
    const cats = useAppSelector(selectCatState).items;
    const dispatch = useAppDispatch();
    const loadMore = useCallback(
        () => {
            dispatch(loadMoreCatData({category_id: categoryId}));
        },
        [dispatch, categoryId],
    );

    useEffect(() => {
        const promise = dispatch(getCatData({category_id: categoryId}));

        return () => {
            promise.abort();
        }
    }, [dispatch])

    return <div className='main-container'>
        <div className='main-container__img-container'>
            {cats.map((each) => {
                return <div key={each.id} className='main-container__img-container__img'>
                    <LazyLoadImage
                        src={each.url}
                        alt={each.url}
                        height={"500px"}
                        width={"500px"} 
                        effect="blur"
                        delayTime={500}
                        placeholder={<div>asfasfasf</div>} />
                </div>
            })}
        </div>
        <div className='main-container__load-more'>
            <button onClick={loadMore}>Load more</button>
        </div>
    </div>
}