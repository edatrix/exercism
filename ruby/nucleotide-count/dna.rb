class DNA

  attr_reader :sequence

  def initialize(nucleotides)
    @sequence = nucleotides.chars
    raise ArgumentError if sequence.any? {|elem| invalid? elem}
  end

  def count(nucleotide)
    raise ArgumentError if invalid?(nucleotide)
    sequence.count(nucleotide)
  end

  def invalid?(nucleotide)
    !valid_nucleotides.include? nucleotide
  end

  def nucleotide_counts
    valid_nucleotides.each_with_object({}) { |nucleotide, counts| counts[nucleotide] = count(nucleotide)}
  end

  def valid_nucleotides
    @valid_nucleotides ||= ['A', 'T', 'C', 'G']
  end

end
