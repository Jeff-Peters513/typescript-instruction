import { Actor } from "../model/actor.class";


export class ActorService {
    actors: Actor[] = [];

    list(): Actor[]{
        return this.actors;
    }


}
