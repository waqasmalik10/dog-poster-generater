import DropDown from 'components/common/dropDown';
import AppButton from 'components/common/button';
import { Typography } from "@mui/material";
import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getBreedImagesAction, imageCountSelector, subBreedSelector, setModalImages } from 'app/reducers/DogSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';

interface Props {
    breeds: Array<string>;
    addHendler: Function;
    showAddButton: boolean;
}

const SingleRow: FC<Props> = (props) => {
    const { addHendler, breeds, showAddButton } = props;
    const dispatch = useAppDispatch()

    const [selectedBreed, setSelectedBreed] = useState('');
    const [selectedSubBreed, setSelectedSubBreed] = useState('');
    const ImagesCount = useAppSelector(imageCountSelector(selectedSubBreed))
    const subBreeds = useAppSelector(subBreedSelector(selectedBreed))

    useEffect(() => {
        dispatch(getBreedImagesAction(selectedBreed, selectedSubBreed))
    }, [dispatch, selectedBreed, selectedSubBreed])

    const generateClick = () => {
        dispatch(setModalImages(selectedSubBreed))
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
            <DropDown
                label='Breed'
                handleChange={(value: string) => setSelectedBreed(value)}
                value={selectedBreed}
                options={breeds}
            />
            <DropDown
                label='SubBreed'
                handleChange={(value: string) => setSelectedSubBreed(value)}
                value={selectedSubBreed}
                options={subBreeds}
                disabled={!selectedBreed.length}

            />
            <Typography sx={{ borderRadius: "4px", marginRight: '10px', border: '1px solid', padding: "13px", width: "100%", maxWidth: "100px" }}>{ImagesCount}</Typography>

            <AppButton
                handleClick={() => generateClick()}
                disabled={!ImagesCount}
                variant='contained'
                text={'Generate'}
            />
            {showAddButton &&
                <AddCircleOutlineIcon onClick={() => addHendler()} sx={{cursor: "pointer"}} />
            }
        </Box>
    )
}
export default SingleRow