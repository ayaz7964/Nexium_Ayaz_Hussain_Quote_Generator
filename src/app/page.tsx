"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Quote = {
  title: string;
  author: string;
  description: string;
};

export default function Page() {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState<Quote[]>([]);
  // Example: Place at the top of your page.tsx
  const quotes = [
    {
      title: "Inspiration",
      author: "Walt Disney",
      description:
        "The best way to get started is to quit talking and begin doing.",
    },
    {
      title: "Motivation",
      author: "Will Rogers",
      description: "Don't let yesterday take up too much of today.",
    },
    {
      title: "Perseverance",
      author: "Vince Lombardi",
      description:
        "It's not whether you get knocked down, it's whether you get up.",
    },
    {
      title: "Excitement",
      author: "Steve Jobs",
      description:
        "If you are working on something exciting, it will keep you motivated.",
    },
    {
      title: "Success",
      author: "Bo Bennett",
      description: "Success is not in what you have, but who you are.",
    },
    {
      title: "Hard Work",
      author: "Unknown",
      description:
        "The harder you work for something, the greater you'll feel when you achieve it.",
    },
    {
      title: "Dream Big",
      author: "Unknown",
      description: "Dream bigger. Do bigger.",
    },
    {
      title: "Persistence",
      author: "Sam Levenson",
      description: "Don't watch the clock; do what it does. Keep going.",
    },
    {
      title: "Growth",
      author: "Neil Strauss",
      description: "Great things never come from comfort zones.",
    },
    {
      title: "Self-Motivation",
      author: "Unknown",
      description:
        "Push yourself, because no one else is going to do it for you.",
    },
    {
      title: "Opportunity",
      author: "George Bernard Shaw",
      description: "Don't wait for opportunity. Create it.",
    },
    {
      title: "Strength",
      author: "Unknown",
      description:
        "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    },
    {
      title: "Focus",
      author: "Unknown",
      description: "The key to success is to focus on goals, not obstacles.",
    },
    {
      title: "Belief",
      author: "Theodore Roosevelt",
      description: "Believe you can and you're halfway there.",
    },
    {
      title: "Imagination",
      author: "Unknown",
      description: "Your limitation—it's only your imagination.",
    },
    {
      title: "Action",
      author: "Unknown",
      description: "Sometimes later becomes never. Do it now.",
    },
    {
      title: "Determination",
      author: "George Lorimer",
      description: "Wake up with determination. Go to bed with satisfaction.",
    },
    {
      title: "Future",
      author: "Sean Patrick Flanery",
      description:
        "Do something today that your future self will thank you for.",
    },
    {
      title: "Small Steps",
      author: "Isabel Marant",
      description: "Little things make big days.",
    },
    {
      title: "Possibility",
      author: "Art Williams",
      description: "It's going to be hard, but hard does not mean impossible.",
    },
    {
      title: "Luck",
      author: "Gary Player",
      description: "The harder you work, the luckier you get.",
    },
    {
      title: "Completion",
      author: "Marilyn Monroe",
      description: "Don't stop when you're tired. Stop when you're done.",
    },
    {
      title: "Courage",
      author: "Winston Churchill",
      description:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      title: "Learning",
      author: "Albert Einstein",
      description:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      title: "Change",
      author: "Maya Angelou",
      description:
        "If you don't like something, change it. If you can't change it, change your attitude.",
    },
    {
      title: "Vision",
      author: "Helen Keller",
      description:
        "The only thing worse than being blind is having sight but no vision.",
    },
    {
      title: "Happiness",
      author: "Dalai Lama",
      description:
        "Happiness is not something ready made. It comes from your own actions.",
    },
    {
      title: "Wisdom",
      author: "Socrates",
      description: "The only true wisdom is in knowing you know nothing.",
    },
    {
      title: "Kindness",
      author: "Mark Twain",
      description:
        "Kindness is the language which the deaf can hear and the blind can see.",
    },
    {
      title: "Patience",
      author: "Leo Tolstoy",
      description: "The two most powerful warriors are patience and time.",
    },
    {
      title: "Creativity",
      author: "Pablo Picasso",
      description: "Everything you can imagine is real.",
    },
    {
      title: "Hope",
      author: "Christopher Reeve",
      description: "Once you choose hope, anything’s possible.",
    },
    {
      title: "Resilience",
      author: "Nelson Mandela",
      description:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      title: "Gratitude",
      author: "William Arthur Ward",
      description:
        "Gratitude can transform common days into thanksgivings, turn routine jobs into joy, and change ordinary opportunities into blessings.",
    },
    {
      title: "Peace",
      author: "Mother Teresa",
      description: "Peace begins with a smile.",
    },
    {
      title: "Love",
      author: "Lao Tzu",
      description:
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    },
    {
      title: "Adventure",
      author: "Helen Keller",
      description: "Life is either a daring adventure or nothing at all.",
    },
    {
      title: "Faith",
      author: "Martin Luther King Jr.",
      description:
        "Faith is taking the first step even when you don't see the whole staircase.",
    },
    {
      title: "Ambition",
      author: "Eleanor Roosevelt",
      description:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      title: "Discipline",
      author: "Jim Rohn",
      description: "Discipline is the bridge between goals and accomplishment.",
    },
    {
      title: "Excellence",
      author: "Aristotle",
      description:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    },
    {
      title: "Optimism",
      author: "Helen Keller",
      description:
        "Keep your face to the sunshine and you cannot see a shadow.",
    },
    {
      title: "Forgiveness",
      author: "Lewis B. Smedes",
      description:
        "To forgive is to set a prisoner free and discover that the prisoner was you.",
    },
    {
      title: "Humility",
      author: "C.S. Lewis",
      description:
        "Humility is not thinking less of yourself, it's thinking of yourself less.",
    },
    {
      title: "Service",
      author: "Albert Schweitzer",
      description:
        "The purpose of human life is to serve, and to show compassion and the will to help others.",
    },
    {
      title: "Friendship",
      author: "Ralph Waldo Emerson",
      description: "The only way to have a friend is to be one.",
    },
    {
      title: "Integrity",
      author: "Zig Ziglar",
      description:
        "With integrity, you have nothing to fear, since you have nothing to hide.",
    },
    {
      title: "Balance",
      author: "Buddha",
      description:
        "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    },
    {
      title: "Curiosity",
      author: "Walt Disney",
      description:
        "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.",
    },
    {
      title: "Freedom",
      author: "Malala Yousafzai",
      description:
        "Let us make our future now, and let us make our dreams tomorrow's reality.",
    },
    {
      title: "Joy",
      author: "Anne Frank",
      description: "Whoever is happy will make others happy too.",
    },
    {
      title: "Self-Respect",
      author: "Mahatma Gandhi",
      description: "Nobody can hurt me without my permission.",
    },
    {
      title: "Self-Discovery",
      author: "Rumi",
      description: "The wound is the place where the Light enters you.",
    },
    {
      title: "Mindfulness",
      author: "Thich Nhat Hanh",
      description:
        "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    },
    {
      title: "Learning",
      author: "Confucius",
      description:
        "It does not matter how slowly you go as long as you do not stop.",
    },
    {
      title: "Giving",
      author: "Winston Churchill",
      description:
        "We make a living by what we get, but we make a life by what we give.",
    },
    {
      title: "Simplicity",
      author: "Leonardo da Vinci",
      description: "Simplicity is the ultimate sophistication.",
    },
    {
      title: "Preparation",
      author: "Alexander Graham Bell",
      description: "Before anything else, preparation is the key to success.",
    },
    {
      title: "Action",
      author: "Johann Wolfgang von Goethe",
      description:
        "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    },
    {
      title: "Imagination",
      author: "Albert Einstein",
      description: "Imagination is more important than knowledge.",
    },
    {
      title: "Patience",
      author: "Jean-Jacques Rousseau",
      description: "Patience is bitter, but its fruit is sweet.",
    },
    {
      title: "Hope",
      author: "Emily Dickinson",
      description: "Hope is the thing with feathers that perches in the soul.",
    },
    {
      title: "Strength",
      author: "Friedrich Nietzsche",
      description: "That which does not kill us makes us stronger.",
    },
    {
      title: "Wisdom",
      author: "Benjamin Franklin",
      description:
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    },
    {
      title: "Change",
      author: "Heraclitus",
      description: "There is nothing permanent except change.",
    },
    {
      title: "Truth",
      author: "Oscar Wilde",
      description: "The truth is rarely pure and never simple.",
    },
    {
      title: "Justice",
      author: "Martin Luther King Jr.",
      description: "Injustice anywhere is a threat to justice everywhere.",
    },
    {
      title: "Peace",
      author: "John Lennon",
      description:
        "Peace is not something you wish for; it's something you make, something you do, something you are, and something you give away.",
    },
    {
      title: "Love",
      author: "Mother Teresa",
      description:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    {
      title: "Courage",
      author: "Mark Twain",
      description:
        "Courage is resistance to fear, mastery of fear, not absence of fear.",
    },
    {
      title: "Happiness",
      author: "Abraham Lincoln",
      description:
        "Folks are usually about as happy as they make their minds up to be.",
    },
    {
      title: "Ambition",
      author: "Napoleon Hill",
      description: "A goal is a dream with a deadline.",
    },
    {
      title: "Determination",
      author: "Og Mandino",
      description:
        "Failure will never overtake me if my determination to succeed is strong enough.",
    },
    {
      title: "Self-Improvement",
      author: "Bruce Lee",
      description:
        "Absorb what is useful, discard what is not, add what is uniquely your own.",
    },
    {
      title: "Vision",
      author: "Jonathan Swift",
      description: "Vision is the art of seeing what is invisible to others.",
    },
    {
      title: "Kindness",
      author: "Aesop",
      description: "No act of kindness, no matter how small, is ever wasted.",
    },
    {
      title: "Forgiveness",
      author: "Mahatma Gandhi",
      description:
        "The weak can never forgive. Forgiveness is the attribute of the strong.",
    },
    {
      title: "Gratitude",
      author: "Melody Beattie",
      description:
        "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    },
    {
      title: "Success",
      author: "Henry David Thoreau",
      description:
        "Success usually comes to those who are too busy to be looking for it.",
    },
    {
      title: "Learning",
      author: "Malcolm X",
      description:
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    },
    {
      title: "Creativity",
      author: "George Bernard Shaw",
      description: "Imagination is the beginning of creation.",
    },
    {
      title: "Hope",
      author: "Desmond Tutu",
      description:
        "Hope is being able to see that there is light despite all of the darkness.",
    },
    {
      title: "Patience",
      author: "Buddha",
      description: "A jug fills drop by drop.",
    },
    {
      title: "Wisdom",
      author: "Lao Tzu",
      description:
        "Knowing others is intelligence; knowing yourself is true wisdom.",
    },
    {
      title: "Strength",
      author: "Harriet Beecher Stowe",
      description:
        "When you get into a tight place and everything goes against you, never give up then, for that is just the place and time that the tide will turn.",
    },
    {
      title: "Peace",
      author: "Albert Einstein",
      description:
        "Peace cannot be kept by force; it can only be achieved by understanding.",
    },
    {
      title: "Love",
      author: "Victor Hugo",
      description:
        "To love or have loved, that is enough. Ask nothing further.",
    },
    {
      title: "Courage",
      author: "Amelia Earhart",
      description:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
    },
    {
      title: "Happiness",
      author: "Dalai Lama",
      description:
        "Happiness is not something ready made. It comes from your own actions.",
    },
    {
      title: "Ambition",
      author: "Les Brown",
      description:
        "Shoot for the moon. Even if you miss, you'll land among the stars.",
    },
    {
      title: "Determination",
      author: "Florence Nightingale",
      description:
        "I attribute my success to this: I never gave or took any excuse.",
    },
    {
      title: "Self-Improvement",
      author: "Ralph Waldo Emerson",
      description:
        "The only person you are destined to become is the person you decide to be.",
    },
    {
      title: "Vision",
      author: "Steve Jobs",
      description: "Innovation distinguishes between a leader and a follower.",
    },
    {
      title: "Kindness",
      author: "Princess Diana",
      description:
        "Carry out a random act of kindness, with no expectation of reward.",
    },
    {
      title: "Forgiveness",
      author: "Lewis B. Smedes",
      description:
        "To forgive is to set a prisoner free and discover that the prisoner was you.",
    },
    {
      title: "Gratitude",
      author: "Oprah Winfrey",
      description: "Be thankful for what you have; you'll end up having more.",
    },
    {
      title: "Success",
      author: "Winston Churchill",
      description:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      title: "Learning",
      author: "Albert Einstein",
      description:
        "Intellectual growth should commence at birth and cease only at death.",
    },
    {
      title: "Creativity",
      author: "Maya Angelou",
      description:
        "You can't use up creativity. The more you use, the more you have.",
    },
    {
      title: "Hope",
      author: "Barack Obama",
      description:
        "The best way to not feel hopeless is to get up and do something.",
    },
    {
      title: "Patience",
      author: "Joyce Meyer",
      description:
        "Patience is not simply the ability to wait - it's how we behave while we're waiting.",
    },
    {
      title: "Wisdom",
      author: "Confucius",
      description: "Real knowledge is to know the extent of one's ignorance.",
    },
    {
      title: "Strength",
      author: "Helen Keller",
      description:
        "Although the world is full of suffering, it is also full of the overcoming of it.",
    },
    {
      title: "Peace",
      author: "Jimi Hendrix",
      description:
        "When the power of love overcomes the love of power the world will know peace.",
    },
    {
      title: "Love",
      author: "Leo Buscaglia",
      description:
        "Love is always bestowed as a gift - freely, willingly and without expectation.",
    },
    // ...add more if needed...
  ];

  //
  const handleclick = () => {
    setFilterData(
      quotes
        .filter(
          (q) =>
            q.title.toLowerCase().includes(search.toLowerCase()) ||
            q.author.toLowerCase().includes(search.toLowerCase()) ||
            q.description.toLowerCase().includes(search.toLowerCase())
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    );
  };
  return (
    <div className="flex justify-center  items-center flex-col">
      <p className="text-center text-8xl p-8  ">Quote Generator</p>
      <div className="flex  flex-row gap-7">
        <Input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Generat Your Favourate Quotes"
          className="w-200 border-4 border-black-900"
        />
        <Button variant="secondary" onClick={handleclick}>
          🔍
        </Button>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        {filterData.length === 0 ? (
          <p>No quotes found.</p>
        ) : (
          filterData.map((f, i) => (
            <Card key={i} className="w-100  m-5">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{f.description}</p>
              </CardContent>
              <CardFooter>
                <p>{f.author}</p>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
