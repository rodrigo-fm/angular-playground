import Rat from '../../domain/entities/rat.entity';

export interface RatJsonModelConstructorArgs {
    title: string;
    imagesURLS: string[];
};

export default class RatRedditJsonModel implements Rat {
    title: string;
    imagesURLS: string[];

    constructor(args: RatJsonModelConstructorArgs) {
        this.title = args.title;
        this.imagesURLS = args.imagesURLS;
    }

    static fromJsonList(json: any[]): RatRedditJsonModel[] {
        return json
            .filter((child) => {
                const metaData = child.data.media_metadata;
                if(metaData === undefined) return false;
                const metaDataKeys = Object.keys(metaData);
                return (
                    metaData[metaDataKeys[metaDataKeys.length - 1]].e === 'Image'
                );
            })
            .map((rat) => {
                const mediaMetaDataKeys = Object.keys(rat.data.media_metadata);
                return new RatRedditJsonModel({
                    title: rat.data.title,
                    imagesURLS: mediaMetaDataKeys.map((key: string) => {
                        const metaDatas = rat.data.media_metadata;
                        if(metaDatas[key].s !== undefined) return metaDatas[key].s.u;
                        return metaDatas[key].p[metaDatas[key].p.length - 1].u;
                    }),
            });
        });
    }
}