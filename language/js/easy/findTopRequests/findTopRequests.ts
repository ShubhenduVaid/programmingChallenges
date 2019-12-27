export const findTopRequests = {
    name: 'Find Top Requests',
    description: `Given a list of requests from customer called featureRequests and a list of possibleFeatures.
    Find out the top requests. If the count for 2 features are same, show them in ascending order.`,
    solution: `let featureRequests = [
        'I need more storage!',
        'Need more battery.',
        'Read in bath and enjoy waterproof kindle',
        'Waterproof battery and increase battery life.',
        'Take kindle in shower. Waterproof please hover Waterproof.'
    ];
    let possibleFeatures = ['storage', 'battery', 'hover', 'alexa', 'waterproof', 'solar'];
    
    function getPossibleFeaturesCount(featureRequests, possibleFeatures) {
        let possibleFeaturesMap = {};
        const featureStr = featureRequests.join('++').toLowerCase();
        possibleFeatures.forEach(feature => {
            feature = feature.toLowerCase();
            if(!possibleFeaturesMap[feature]){
                possibleFeaturesMap[feature] = featureStr.split(feature).length - 1;
            }else{
                possibleFeaturesMap[feature] += featureStr.split(feature).length - 1;
            }
        });
        let priorityFeatureList = Object.keys(possibleFeaturesMap);
        priorityFeatureList = priorityFeatureList.sort((feature1, feature2) => {
            const a = possibleFeaturesMap[feature1];
            const b = possibleFeaturesMap[feature2];
            if (a > b) {
                return -1;
            }
            if (b > a) {
                return 1;
            }
            if(a === b){
                if(feature1 < feature2){
                    return -1;
                }else{
                    return 1;
                }
            }
            return 0;
        });
        console.log(priorityFeatureList);
    }
    getPossibleFeaturesCount(featureRequests, possibleFeatures);`
  };
  