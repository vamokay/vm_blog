---
layout: post
title: Groups
categories: Groups
math: "true"
---

I mentioned in [my last post]({% post_url /coolmaths/2020-06-11-intro %}) that sets were the underlying framework for a variety of areas of mathematics - many areas of maths start with considering sets with special rules, known as axioms, and then seeing what we can get with those. I want to talk about a specific one of these today: groups. 

I'm currently doing an [online course in Algebraic Geometry][agittoc] (more on that later, maybe), and while I've learned some technical maths, I think what's been much more important for me is the idea of the importance of names. In this case, we shouldn't be asking what a group is, but rather why it is. But really (at least to me) this is two questions: 

Why should we call it something other than a set with special rules? 

What kind of feeling are we trying to conjure by calling something a group?

As a brief answer to the first question, group theory is both fun and extremely important. It has ties to several other areas of maths and quite a lot of physics. Groups are very natural structures, so they deserve a distinguishing name. I'll try and talk a little bit more about this after answering the second question.

Why should I use the word group to describe something? Well, more than a set, a group seems to have some idea of "togetherness" - there's a clear difference between a set of musicians and a music group. What might this mean for us mathematically? 

While we're thinking about that, let's look at some geometric intuition. Here's an equilateral triangle:

![triangleS3](/assets/triangleS3.png)

A very obvious, intuitive "fact" is that the three lines cutting across the triangle are lines of symmetry: reflecting the triangle across any of the lines (or more than one) leaves you with the same triangle, with the labels on the corners changed. For example, reflecting in $\sigma_1$ fixes $a$ and swaps $b$ and $c$. 

We also have rotational symmetry: we can rotate $a$ to $b$ (one-third of a circle, so $120^{\circ}$ or $\frac{2\pi}{3}$ radians), $a$ to $c$ (two-thirds of a circle, so $240^{\circ}$ or $\frac{4\pi}{3}$ radians) or $a$ to itself, (do nothing, or equivalently, rotate by a full circle, $360^{\circ}$ or $2\pi$ radians).  

Together the reflections and rotations give us a set of things - transformations - we can do to a triangle that leave it looking the same. 

This is known as _closure_ - any two transformations performed in succession are the equivalent of one transformations. "Performing in succession" in maths is referred to as _composition_, and this is our example of a _group operation_. I will always end up with something that looks like I've either rotated the triangle once or reflected it once (try this yourself). 

I know this is the case because I have only 6 possible arrangements of the corners, and 6 transformations (including the "do nothing" rotation, the _identity_). 

I can also undo any transformation - to undo a reflection, simply perform the same reflection. The fixed corner remains fixed, and the other two swap twice, thereby returning to their initial positions. Any rotation can be "undone" by performing a second rotation so that the two combined are a full circle. So for any transformation, I have an _inverse_. 

Lastly, we've said that the group is closed under the composition operation. We want this operation to behave sensibly - but what does that mean? 

I think of composition as sort of "packaging" two transformations into one. This packaging order isn't changing the order of the actual transformations being performed, so it should not change the final answer:

$$(\alpha \circ \beta) \circ \gamma = \alpha \circ (\beta \circ \gamma)$$

This is known as _associativity_.

As a more concrete example, take addition over the integers, and in particular something like $(5 + 3) + 2 = 5 + (3 + 2)$. 

So now we know what a group is: a set with an operation that combines its elements in such a manner that obeys certain rules. More importantly, we've looked a little bit at _why_ we call it that - it's elements are "closer" than those of a set - they're all interrelated, and can be combined in some manner. 

Mathematically, a group is a set $G$ with an operation $\cdot$, together written $(G, \cdot)$, such that the axioms are satisfied: closure, associativity, and the existence of a group identity and an inverse for every element. Note that $G$ on its own is just a set, it's the addition of the operation that makes it a group - and the same set can have different operations applied to it, making different groups. 

Sometimes, depending on the choice of group operation, we can add a fifth axiom, if it doesn't matter which elements are on the left v/s the right (traditionally we use $g, h, ...$ for elements of a group). If

$$g \cdot h = h \cdot g$$

we say the operation is commutative: addition is commutative, but subtraction isn't. We refer to such a group as an abelian group after [Niels Abel][abel] who used them to solve several important results. The symmetry group of the triangle above is not (an) abelian (group), but the integers under addition are. 

So now that we've got an understading of why grups might be referred to as groups, let's get back to why we bothered naming them in the first place: they're incredibly important objects. 

As we've seen, groups are naturally connected to geometry and geometrical objects - we can form analogous groups to the one above for other regular shapes eg. a square, a pentagon, etc. This has mathematical implications, but also physical ones - we can define symmetry groups for crystals and investigate them in that manner. Symmetry groups play a large role in physics, as they can be connected to the [conservation][noether] of quantities like energy and momentum. Group theory is also plays a large role in modern-day implementations of cryptography, which I might make a post about one day. 

Really there are a hundred and one reasons you might study these - personally, I most enjoy seeing what we can do with them. 


[agittoc]: https://math216.wordpress.com/agittoc-2020/
[abel]: https://en.wikipedia.org/wiki/Niels_Henrik_Abel
[noether]: https://en.wikipedia.org/wiki/Noether%27s_theorem









