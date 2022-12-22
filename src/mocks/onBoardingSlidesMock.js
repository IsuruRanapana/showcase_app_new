// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/22/2022 => 10:46 AM  *** //


import title from 'react-native-paper/src/components/Typography/v2/Title';
import image from 'react-native-reanimated/src/reanimated2/component/Image';
import images from '../../assets/images';

const onBoardingItems = [
    {
        key: 1,
        title: 'Fractional Shares',
        text:'Instead of having to buy an entire \n share, invest any amount you want.',
        image: images.intro01,
        backgroundColor:'white'
    },
    {
        key: 2,
        title: 'Learn as you go',
        text:'Download the Showcase app and \n master the market with our \n mini-lesson.',
        image: images.intro02,
        backgroundColor:'white'
    },
    {
        key: 3,
        title: 'Kids and Teens',
        text:'Kids and teens can track their \n stocks 24/7 and place trades that \n you approve.',
        image: images.intro03,
        backgroundColor:'white'
    },
    {
        key: 4,
        title: 'Full Screen Page',
        text:'Another beautiful body text for this \n example on boarding. Start your \n journey.',
        image: images.intro04,
        backgroundColor:'white'
    }
]

export default onBoardingItems;
