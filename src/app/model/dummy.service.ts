import { Injectable } from '@angular/core';
import {Post} from './post';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  loggedIn = false;

  posts = [
    new Post({ id: 0,
      title: 'What a piece of work is man!',
      author: 'Hamlet',
      // tslint:disable-next-line:max-line-length
      body: 'I have of late, (but wherefore I know not) lost all my mirth, forgone all custom of exercises; and indeed, it goes so heavily with my disposition; that this goodly frame the earth, seems to me a sterile promontory; this most excellent canopy the air, look you, this brave o\'er hanging firmament, this majestical roof, fretted with golden fire: why, it appeareth no other thing to me, than a foul and pestilent congregation of vapours. What a piece of work is man, How noble in reason, how infinite in faculty, In form and moving how express and admirable, In action how like an Angel, In apprehension how like a god, The beauty of the world, The paragon of animals. And yet to me, what is this quintessence of dust? Man delights not me; no, nor Woman neither; though by your smiling you seem to say so.'}),
    new Post({
      id: 1,
      title: 'To be or not to be',
      author: 'Hamlet',
      body: 'To be, or not to be, that is the question:\n' +
        'Whether \'tis nobler in the mind to suffer\n' +
        'The slings and arrows of outrageous fortune,\n' +
        'Or to take Arms against a Sea of troubles,\n' +
        'And by opposing end them: to die, to sleep\n' +
        'No more; and by a sleep, to say we end\n' +
        'The heart-ache, and the thousand natural shocks\n' +
        'That Flesh is heir to? \'Tis a consummation\n' +
        'Devoutly to be wished. To die, to sleep,\n' +
        'To sleep, perchance to Dream; aye, there\'s the rub,\n' +
        'For in that sleep of death, what dreams may come,\n' +
        'When we have shuffled off this mortal coil,\n' +
        'Must give us pause. There\'s the respect\n' +
        'That makes Calamity of so long life:\n' +
        'For who would bear the Whips and Scorns of time,\n' +
        'The Oppressor\'s wrong, the proud man\'s Contumely,\n' +
        'The pangs of disprized Love, the Law’s delay,\n' +
        'The insolence of Office, and the spurns\n' +
        'That patient merit of the unworthy takes,\n' +
        'When he himself might his Quietus make\n' +
        'With a bare Bodkin? Who would Fardels bear, [F: these Fardels]\n' +
        'To grunt and sweat under a weary life,\n' +
        'But that the dread of something after death,\n' +
        'The undiscovered country, from whose bourn\n' +
        'No traveller returns, puzzles the will,\n' +
        'And makes us rather bear those ills we have,\n' +
        'Than fly to others that we know not of.\n' +
        'Thus conscience doth make cowards of us all,\n' +
        'And thus the native hue of Resolution\n' +
        'Is sicklied o\'er, with the pale cast of Thought,\n' +
        'And enterprises of great pitch and moment, [F: pith]\n' +
        'With this regard their Currents turn awry, [F: away]\n' +
        'And lose the name of Action. Soft you now,\n' +
        'The fair Ophelia? Nymph, in thy Orisons\n' +
        'Be all my sins remember\'d.'}),
    new Post({
      id: 2,
      title: 'Queen Mab',
      author: 'Mercutio',
      body: 'O, then I see Queen Mab hath been with you.\n' +
        'She is the fairies\' midwife, and she comes\n' +
        'In shape no bigger than an agate stone\n' +
        'On the forefinger of an alderman,\n' +
        'Drawn with a team of little atomies\n' +
        'Over men\'s noses as they lie asleep;\n' +
        'Her wagon spokes made of long spinners\' legs,\n' +
        'The cover, of the wings of grasshoppers;\n' +
        'Her traces, of the smallest spider web;\n' +
        'Her collars, of the moonshine\'s wat\'ry beams;\n' +
        'Her whip, of cricket\'s bone; the lash, of film;\n' +
        'Her wagoner, a small grey-coated gnat,\n' +
        'Not half so big as a round little worm\n' +
        'Pricked from the lazy finger of a maid;\n' +
        'Her chariot is an empty hazelnut,\n' +
        'Made by the joiner squirrel or old grub,\n' +
        'Time out o\' mind the fairies\' coachmakers.\n' +
        'And in this state she gallops night by night\n' +
        'Through lovers\' brains, and then they dream of love;\n' +
        'O\'er courtiers\' knees, that dream on curtsies straight;\n' +
        'O\'er lawyers\' fingers, who straight dream on fees;\n' +
        'O\'er ladies\' lips, who straight on kisses dream,\n' +
        'Which oft the angry Mab with blisters plagues,\n' +
        'Because their breaths with sweetmeats tainted are.\n' +
        'Sometimes she gallops o\'er a courtier\'s nose,\n' +
        'And then dreams he of smelling out a suit;\n' +
        'And sometimes comes she with a tithe-pig\'s tail\n' +
        'Tickling a parson\'s nose as \'a lies asleep,\n' +
        'Then dreams he of another benefice.\n' +
        'Sometimes she driveth o\'er a soldier\'s neck,\n' +
        'And then dreams he of cutting foreign throats,\n' +
        'Of breaches, ambuscadoes, Spanish blades,\n' +
        'Of healths five fathom deep; and then anon\n' +
        'Drums in his ear, at which he starts and wakes,\n' +
        'And being thus frighted, swears a prayer or two\n' +
        'And sleeps again. This is that very Mab\n' +
        'That plats the manes of horses in the night\n' +
        'And bakes the elflocks in foul sluttish hairs,\n' +
        'Which once untangled much misfortune bodes.\n' +
        'This is the hag, when maids lie on their backs,\n' +
        'That presses them and learns them first to bear,\n' +
        'Making them women of good carriage.\n' +
        'This is she!'})
  ];
  constructor() { }

  checkLogin(): Observable<boolean> {
    return of(this.loggedIn);
  }

  getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(id): Observable<Post> {
    return of (this.posts[id]);
  }

  setLoginVal(newVal): void {
    this.loggedIn = newVal;
  }
}
