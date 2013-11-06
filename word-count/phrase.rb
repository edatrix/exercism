require 'pry'

class Phrase

  def initialize(phrase)
    @word_count = phrase.to_s
  end

  def word_count
    hash = Hash.new(0)
    split_phrase.each do |word|
      hash[word] += 1
    end
    return hash
  end

  # def split_phrase
  #   split_words = @word_count.split(" ")
  #   split_words
  # end

end
