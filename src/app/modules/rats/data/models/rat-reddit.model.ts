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
            .filter((child) => child.data.media_metadata?.e === 'Image')
            .map((rat) => {
                return new RatRedditJsonModel({
                    title: rat.data.title,
                    imagesURLS: rat.data.media_metadata.map((image: any) => {
                        if(image.s !== undefined) return image.s.u;
                        return image.p[image.p.length - 1].u;
                    }),
            });
        });
    }
}